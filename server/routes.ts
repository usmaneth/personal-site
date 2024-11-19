import type { Express } from "express";

export function registerRoutes(app: Express) {
  // We don't need any API routes for this static portfolio site
  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });
}
