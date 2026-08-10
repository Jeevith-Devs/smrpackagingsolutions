import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Live Gradient Mesh Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/70" />

      {/* Floating Animated Motion Blob 1 (Primary Deep Blue) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-10%] left-[15%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#0056A6] via-[#00A3E0] to-white/40 blur-[100px] opacity-40"
      />

      {/* Floating Animated Motion Blob 2 (Electric Cyan & White Light) */}
      <motion.div
        animate={{
          x: [0, -90, 60, 0],
          y: [0, 70, -50, 0],
          scale: [1, 1.15, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#00A3E0] via-white to-[#0056A6]/40 blur-[110px] opacity-40"
      />

      {/* Floating Animated Motion Blob 3 (Crisp White Glow) */}
      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.3, 0.85, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute bottom-[10%] left-[30%] w-[480px] h-[480px] rounded-full bg-gradient-to-r from-white via-sky-200 to-[#0056A6]/30 blur-[90px] opacity-50"
      />

      {/* Subtle Animated Wave Overlay lines */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#0056A6_1px,transparent_1px)] [background-size:24px_24px]"
      />
    </div>
  );
};
