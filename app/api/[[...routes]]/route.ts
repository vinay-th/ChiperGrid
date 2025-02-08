import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { db } from 'db/drizzle';
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

app.get(
  '/get-words',
  zValidator(
    'json',
    z.object({
      number: z.number(),
    })
  ),
  (c) => {
    return c.json({
      message: 'Hello from Vinay!',
    });
  }
);

export const GET = handle(app);
export const POST = handle(app);
