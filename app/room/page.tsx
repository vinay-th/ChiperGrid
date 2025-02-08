'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Button } from '@/components/ui/neo-button';

export default function Room() {
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
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-row gap-4 items-center justify-center">
            {/* <div className="h-32 w-44 bg-blue-500 rounded-md"></div> */}
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 rounded-md"
            ></Button>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
