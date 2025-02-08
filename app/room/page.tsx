'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Button } from '@/components/ui/neo-button';

export default function Room() {
  const [words, setWords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchWords = async () => {
    setLoading(true);
    const response = await fetch('/api/get-words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ number: 25 }), // Fetch 25 words
    });

    const data = await response.json();
    setWords(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  if (loading) {
    return (
      <AuroraBackground>
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-main"></div>
        </div>
      </AuroraBackground>
    );
  }

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          {words.map((word, index) => (
            <Button
              key={index}
              variant="default"
              size="default"
              className="text-lg bg-[#DAD2FF] rounded-md flex items-center justify-center"
            >
              {word}
            </Button>
          ))}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
