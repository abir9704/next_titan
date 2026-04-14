'use client';
 
import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';
import { Coiny } from 'next/font/google';


const coiny = Coiny({
  subsets: ['latin'],
  weight: '400',
});

const AnimateText = ({text="There's no point pretending to be someone else"}) => {
    const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
    return (
         <div className="flex font-black space-x-1 justify-center ">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`text-xl text-center font-bold font-black bg-clip-text text-transparent bg-gradient-to-b from-gray-100 via-white to-gray-300 tracking-tighter md:text-5xl  md:leading-[5rem] ${coiny.className} bg-[url('/r901.jpg')] bg-cover bg-center`}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
    );
};

export default AnimateText;