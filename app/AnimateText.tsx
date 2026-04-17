'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import spreadfont from 'next/font/local';


const myFont = spreadfont({
  src: './font/spread.otf',
  weight: '400',
  style: 'normal'
})



const texts = [
  "Become who you are",
  "I cannot believe in a God who wants to be praised all the time.",
  "Faith: not wanting to know what the truth is.",
  "In heaven, all the interesting people are missing.",
  "You have your way. I have my way."
];

const AnimateText = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const [index, setIndex] = React.useState(0);
  const [show,setshow]=useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
  setIndex((prev) => (prev + 1) % texts.length);
}, 14000);

const interval2 = setInterval(() => {

  setshow((prev)=>!prev);
  
}, 7000);

      return () => {
    clearInterval(interval);
    clearInterval(interval2);
  };
  }, []);

  // useEffect(()=>{
  //     setInterval(() => {

  //       setshow(!show);
        
  //     }, 9000);
  //      return () => clearInterval(5000);
  // },[show])

  const text = texts[index];

  return (
    <div ref={ref} className="flex justify-center items-center">

      {
        show &&     <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 1 }}
          className={`text-center font-bold ${myFont.className} `}
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
                text-[#a3842e]
                xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg text-[16px]
                tracking-tight
              "
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}

        </motion.div>
      </AnimatePresence>
      }
      
      {/* sentence transition */}
  

    </div>
  );
};

export default AnimateText;