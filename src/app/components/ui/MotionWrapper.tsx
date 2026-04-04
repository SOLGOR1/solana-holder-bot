// src/app/components/ui/MotionWrapper.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const HoverLift = ({ children }: { children: ReactNode }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);