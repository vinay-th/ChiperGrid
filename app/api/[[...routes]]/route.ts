import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { db } from 'db/drizzle';
import { sql } from 'drizzle-orm';
import { words } from 'db/schema';

export const runtime = 'edge';

const app = new Hono().basePath('/api/');

app.post(
  '/add-words',
  zValidator(
    'json',
    z.object({
      wordsList: z.array(z.string()),
    })
  ),
  async (c) => {
    const { wordsList } = c.req.valid('json');

    if (wordsList.length === 0) {
      return c.json({ message: 'No words provided' }, 400);
    }

    // Insert all words into the database
    await db.insert(words).values(wordsList.map((word) => ({ word })));

    return c.json({
      message: 'Words added successfully!',
    });
  }
);

app.post(
  '/get-words',
  zValidator(
    'json',
    z.object({
      number: z.number().min(1),
    })
  ),
  async (c) => {
    const { number } = c.req.valid('json');

    // Fetch random words using SQL `ORDER BY RANDOM()`
    const result = await db
      .select()
      .from(words)
      .orderBy(sql`RANDOM()`)
      .limit(number);

    return c.json({
      words: result,
    });
  }
);

export const GET = handle(app);
export const POST = handle(app);
