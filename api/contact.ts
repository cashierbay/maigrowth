import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { contactSubmissions } from "../shared/schema";
import { z } from "zod";
import type { IncomingMessage, ServerResponse } from "http";

interface VercelRequest extends IncomingMessage {
  body?: any;
  query: Record<string, string | string[]>;
  method: string;
}

interface VercelResponse extends ServerResponse {
  json: (data: any) => void;
  status: (code: number) => VercelResponse;
}

let pool: Pool | null = null;
function getDb() {
  if (!pool) {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return drizzle(pool);
}

const insertSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  website: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const db = getDb();

  if (req.method === "POST") {
    try {
      const parsed = insertSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
        return;
      }
      const [submission] = await db
        .insert(contactSubmissions)
        .values(parsed.data)
        .returning();
      res.status(201).json(submission);
    } catch (err) {
      console.error("Failed to save submission:", err);
      res.status(500).json({ error: "Failed to save submission" });
    }
    return;
  }

  if (req.method === "GET") {
    try {
      const submissions = await db
        .select()
        .from(contactSubmissions)
        .orderBy(contactSubmissions.submittedAt);
      res.status(200).json(submissions);
    } catch (err) {
      console.error("Failed to fetch submissions:", err);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
    return;
  }

  res.status(405).json({ error: "Method not allowed" });
}
