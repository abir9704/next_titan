// import React from 'react';

// const Handlayout = () => {
//     return (
//         <div className="bg-gradient-to-b from-[#143628] via-[#172c1d] to-[#0a160d] min-h-[120vh]">
    
//    {/* <div className="absolute inset-0 bg-[url('/142.jpg')]  opacity-10 mix-blend-overlay"></div> */}

  
            
//         </div>
//     );
// };

// export default Handlayout;


// import React from 'react';

// const Handlayout = () => {
//     return (
//         <div className="relative bg-gradient-to-b from-[#0f2a20] via-[#121815] to-[#08110b] min-h-[140vh]">
//             <div className="absolute inset-0 bg-[url('/rt567.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

//             {/* Your other content goes here */}
//         </div>
//     );
// };

// export default Handlayout;



"use client"
import React, { useEffect, useRef, useState } from 'react';
import Imageslider from './Imageslider';
import { motion } from "framer-motion";
import AnimateText from './AnimateText';
import { Coiny, Lobster } from 'next/font/google';


const lob = Lobster({
  subsets: ['latin'],
  weight: '400',
});

const Handlayout = () => {
  const [imageholder,setimageholder] = useState([]);
   const [started, setStarted] = useState(false); 
     const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(()=>{

    fetch("https://titanbackend-5y95.onrender.com/gallery")
    .then(res=>res.json())
    .then(data=>setimageholder(data))

  },[])

    const handleStart = () => {
    audioRef.current = new Audio("/bgmp.mp3");
    audioRef.current.loop = true;
    audioRef.current.play().catch(err => console.warn("Audio error:", err));
    setStarted(true);
  };


    if (!started) {
    return (
      <div
        onClick={handleStart}
        className="h-screen w-full bg-[url('/red.jpg')] bg-cover bg-center flex flex-col justify-center items-center cursor-pointer"
      >

     
    
      </div>
    );
  }
    return (
       <motion.div
       initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="relative bg-gradient-to-b from-[#0f2a20] via-[#121815] to-[#08110b] min-h-[140vh] ">

        {/* Background image - সবার নিচে */}
        <div className="absolute inset-0 bg-[url('/rt567.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay z-[0] "></div>
        <div className="absolute lg:top-[90px] md:top-[110px] 3xl:left-[620px] 2xl:left-[500px] xl:left-[340px] lg:left-[240px] md:left-[150px] inset-0 bg-[url('/x2.png')] bg-cover bg-center opacity-25 mix-blend-overlay z-[1] xl:w-[580px] xl:h-[580px] lg:w-[500px] lg:h-[500px] md:w-[420px] md:h-[420px] hidden md:block"></div>

        {/* Content - উপরে */}
        <div className='relative z-[1]  '>


          <div
  className="absolute top-[770px] lg:left-[170px] md:left-[110px] sm:left-[92px] left-[78px] h-[4px] 3xl:w-[89%] lg:w-[82%] md:w-[77%] sm:w-[65%] w-[76%] rounded-full z-[1]  "
  style={{
    
   
   
    background: 'linear-gradient(to bottom, #8f8f8f, #e5e5e5, #8f8f8f)',
    boxShadow: '0 0 4px #efefef, 0 0 10px #efefef, 0 0 20px #efefef, 0 0 40px #efefef, 0 0 60px #efefef',
    
  }}
>
</div>
            <div className='pt-[20px] '>

              <div className='flex items-center 5xl:gap-[500px] 4xl:gap-[400px] 3xl:gap-[300px] 2xl:gap-[200px] xl:gap-[100px] lg:gap-[40px] md:gap-[55px] sm:gap-[28px] '>
                <div>

                  <img src="1wr.png" className='w-[165px] h-[165px] lg:ml-[80px] md:ml-[20px] sm:ml-[2px]' alt="" />

                </div>

                <div className={`${lob.className} tracking-widest `}>

                 <p className="text-center 2xl:text-4xl xl:text-3xl md:text-2xl sm:text-[20px] text-[16px] font-bold bg-gradient-to-r from-slate-100 via-white to-slate-400 text-transparent bg-clip-text mb-[10px]">
  ABIR HASAN
</p>
                   <p className=' text-center 2xl:text-4xl xl:text-3xl md:text-2xl sm:text-[20px] text-[16px] bg-gradient-to-r from-slate-100 via-white to-slate-400 font-bold text-transparent bg-clip-text'>DIFFERENT MOMENTS, SAME PERSON</p>

                </div>
                  

              </div>
              


              
               {/* Silver line */}
<div
  className="absolute  lg:left-[162px] md:left-[102px] sm:left-[76px] left-[18%]  w-[4px] rounded-full z-[1]  "
  style={{
    top: '170px',
    bottom: '0',
    minHeight: 'calc(140vh - 187px)',
    background: 'linear-gradient(to bottom, #8f8f8f, #e5e5e5, #8f8f8f)',
    boxShadow: '0 0 4px #efefef, 0 0 10px #efefef, 0 0 20px #efefef, 0 0 40px #efefef, 0 0 60px #efefef'
  }}
>
</div>





<div className='text-white xl:ml-[180px] lg:ml-[170px] md:ml-[100px] sm:ml-[80px] ml-[60px]'>

  <div >

     <Imageslider imageholder={imageholder}></Imageslider>

  </div>

  <div className='mt-[140px] flex justify-center'>

    <AnimateText></AnimateText>

  </div>


  


  




  {/* <div  className=' absolute top-[565px] gap-12 grid grid-cols-6 '>
    {
      imageholder.map((singleimage,index)=>{
        return(
          <div className='border-7 border-[#c2c2c2]' key={index}>
             <img className='w-[230px] h-[254px] object-cover' src={singleimage.image} alt="" />
          </div>
        )
      })
    }
  </div> */}
 
</div>






            </div>
        </div>

        {/* Hexagon - উপরে */}
        {/* <div className="absolute top-[85px] 2xl:right-[100px] xl:right-[30px]  lg:right-[3px] h-[500px] z-[1] ">
          <svg 
  width="420" 
  height="420" 
  viewBox="0 0 100 100"
  style={{ isolation: 'isolate' }}
>
  <defs>
    <linearGradient id="silverFade" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0a0a0a" />
      <stop offset="30%" stopColor="#bfbfbf" />
      <stop offset="70%" stopColor="#f5f5f5" />
      <stop offset="100%" stopColor="#1a1a1a" />
    </linearGradient>
    <clipPath id="hexClip">
      <polygon
        points="26,8 74,8 93,50 74,92 26,92 7,50"
        transform="rotate(17 50 50)"
      />
    </clipPath>
  </defs>

  <image
    href="/r809.jpg"
    x="0" y="0"
    width="100" height="100"
    preserveAspectRatio="xMidYMid slice"
    clipPath="url(#hexClip)"
    style={{ mixBlendMode: 'normal' }}
  />

  <g transform="rotate(17 50 50)">
    <polygon
      points="26,8 74,8 93,50 74,92 26,92 7,50"
      fill="none"
      stroke="url(#silverFade)"
      strokeWidth="2.5"
    />
  </g>
</svg>
        </div> */}

        {/* Hexagon - উপরে */}
<div className="absolute top-[200px] right-[30px] lg:top-[85px] md:top-[180px] sm:top-[180px] 2xl:right-[100px] xl:right-[30px] lg:right-[3px] md:right-[1px] sm:right-[1px] z-[0] w-[250px] h-[250px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[420px] 2xl:h-[420px]">
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    style={{ isolation: 'isolate' }}
  >
    <defs>
      <linearGradient id="silverFade" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0a0a" />
        <stop offset="30%" stopColor="#bfbfbf" />
        <stop offset="70%" stopColor="#f5f5f5" />
        <stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>
      <clipPath id="hexClip">
        <polygon
          points="26,8 74,8 93,50 74,92 26,92 7,50"
          transform="rotate(17 50 50)"
        />
      </clipPath>
    </defs>

    <image
      href="/r809.jpg"
      x="0" y="0"
      width="100" height="100"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#hexClip)"
      style={{ mixBlendMode: 'normal' }}
    />

    <g transform="rotate(17 50 50)">
      <polygon
        points="26,8 74,8 93,50 74,92 26,92 7,50"
        fill="none"
        stroke="url(#silverFade)"
        strokeWidth="2.5"
      />
    </g>
  </svg>
</div>


        

      </motion.div>
    );
};

export default Handlayout;

