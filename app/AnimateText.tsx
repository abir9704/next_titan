'use client';

import React from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Coiny } from 'next/font/google';

const coiny = Coiny({
  subsets: ['latin'],
  weight: '400',
});

const texts = [
  "There's no point pretending to be someone else",
  "Stay real, stay focused",
  "Build your own world"
];

const AnimateText = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
  setIndex((prev) => (prev + 1) % texts.length);
}, 4000);

    return () => clearInterval(interval);
  }, []);

  const text = texts[index];

  return (
    <div ref={ref} className="flex justify-center items-center">
      
      {/* sentence transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 1 }}
          className={`text-center font-bold ${coiny.className}`}
        >

          {/* letter animation */}
          {text.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.03
              }}
              className="
                text-transparent bg-clip-text
                bg-gradient-to-b from-gray-100 via-white to-gray-300
                xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg text-sm
                tracking-tight
              "
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}

        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default AnimateText;