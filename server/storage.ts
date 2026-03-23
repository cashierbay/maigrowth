import { type User, type InsertUser, type InsertContact, type ContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(data: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

// In-memory storage for development without database
export class MemoryStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private contactSubmissions: ContactSubmission[] = [];

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(data: InsertContact): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      id: this.contactSubmissions.length + 1,
      ...data,
      submittedAt: new Date(),
    };
    this.contactSubmissions.push(submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.contactSubmissions].sort((a, b) => 
      (a.submittedAt?.getTime() || 0) - (b.submittedAt?.getTime() || 0)
    );
  }
}

// Database storage using Drizzle ORM (when DATABASE_URL is available)
export class DatabaseStorage implements IStorage {
  private db: any;
  private pool: any;

  constructor() {
    // Lazy initialization to avoid import errors when pg is not configured
  }

  private async getDb() {
    if (!this.db) {
      const { drizzle } = await import("drizzle-orm/node-postgres");
      const { Pool } = await import("pg");
      const { users, contactSubmissions } = await import("@shared/schema");
      this.pool = new Pool({ connectionString: process.env.DATABASE_URL });
      this.db = drizzle(this.pool);
    }
    return this.db;
  }

  async getUser(id: string): Promise<User | undefined> {
    const db = await this.getDb();
    const { users } = await import("@shared/schema");
    const { eq } = await import("drizzle-orm");
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const db = await this.getDb();
    const { users } = await import("@shared/schema");
    const { eq } = await import("drizzle-orm");
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const db = await this.getDb();
    const { users } = await import("@shared/schema");
    const id = randomUUID();
    const [user] = await db.insert(users).values({ ...insertUser, id }).returning();
    return user;
  }

  async createContactSubmission(data: InsertContact): Promise<ContactSubmission> {
    const db = await this.getDb();
    const { contactSubmissions } = await import("@shared/schema");
    const [submission] = await db.insert(contactSubmissions).values(data).returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    const db = await this.getDb();
    const { contactSubmissions } = await import("@shared/schema");
    return db.select().from(contactSubmissions).orderBy(contactSubmissions.submittedAt);
  }
}

// Use memory storage if no DATABASE_URL is set
export const storage: IStorage = process.env.DATABASE_URL 
  ? new DatabaseStorage() 
  : new MemoryStorage();
