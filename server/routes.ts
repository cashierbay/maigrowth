import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
      }
      const submission = await storage.createContactSubmission(parsed.data);
      return res.status(201).json(submission);
    } catch (err) {
      console.error("Failed to save contact submission:", err);
      return res.status(500).json({ error: "Failed to save submission" });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.json(submissions);
    } catch (err) {
      console.error("Failed to fetch submissions:", err);
      return res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  return httpServer;
}
