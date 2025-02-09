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
    <AuroraBackground className="h-lvh overflow-hidden scroll-my-0">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-1"
      >
        <div className="mt-2 grid grid-cols-5 grid-rows-5 gap-4 phone:gap-1">
          {words.map((word, index) => (
            <Button
              key={index}
              variant="default"
              size="default"
              className="text-xs font-bold bg-[#DAD2FF] rounded-md items-center justify-center phone:w-[70px] phone:h-[38px] phone:text-[0.55rem] "
            >
              <p
                style={{
                  fontFamily: 'Futura-Bold-Cond',
                  textTransform: 'uppercase',
                }}
              >
                {word}
              </p>
            </Button>
          ))}
        </div>
      </motion.div>
      <section className="flex m-0 mt-4">
        <div className="absolute flex justify-center items-center left-0 h-[400px] w-32    bg-[#74c4ea]">
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-sm">Operative(s)</p>
            <Button
              variant="default"
              className="w-28 h-10 bg-blue-800 text-white border-blue-700"
            >
              Vinay
            </Button>
            <p className="text-white text-sm">Spymaster(s)</p>
            <Button
              variant="default"
              className="w-28  h-10 bg-blue-800 text-white border-blue-700"
            >
              Batak
            </Button>
          </div>
        </div>
        <div className="absolute flex justify-center items-center right-0 h-[400px] w-32  bg-[#e0332d]">
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-sm">Operative(s)</p>
            <Button
              variant="default"
              className="w-28 h-10 bg-blue-800 text-white border-blue-700"
            >
              Koi aur
            </Button>
            <p className="text-white text-sm">Spymaster(s)</p>
            <Button
              variant="default"
              className="w-28  h-10 bg-blue-800 text-white border-blue-700"
            >
              Koi aur
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center h-[400px] w-32 bg-white"></div>
      </section>
    </AuroraBackground>
  );
}
