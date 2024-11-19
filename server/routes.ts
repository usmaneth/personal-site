import type { Express } from "express";
import { eq } from "drizzle-orm";
import { db } from "db";
import { blogPosts } from "@db/schema";

export function registerRoutes(app: Express) {
  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Blog posts endpoints
  app.get('/api/blog-posts', async (req, res) => {
    try {
      const posts = await db.query.blogPosts.findMany({
        orderBy: (posts) => [posts.publishedAt],
      });
      res.json(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
  });

  app.get('/api/blog-posts/:slug', async (req, res) => {
    try {
      const post = await db.query.blogPosts.findFirst({
        where: eq(blogPosts.slug, req.params.slug),
      });
      
      if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      
      res.json(post);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      res.status(500).json({ error: 'Failed to fetch blog post' });
    }
  });
}
