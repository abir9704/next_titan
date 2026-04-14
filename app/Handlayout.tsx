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

const Handlayout = () => {
  const [imageholder,setimageholder] = useState([]);
   const [started, setStarted] = useState(false); 
     const audioRef = useRef(null);

  useEffect(()=>{

    fetch("/imagedata.json")
    .then(res=>res.json())
    .then(data=>setimageholder(data.gallery))

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

     
        <motion.p
  className="text-white text-2xl font-bold text-center animate-pulse"
  initial={{ opacity: 0, y: -40 }}  // start invisible and slightly down
  animate={{ opacity: 1, y: 20 }}   // fade in and move to original position
  transition={{ duration: 3, ease: "easeOut" }} // smooth fade in
>
 
  
</motion.p>
      </div>
    );
  }
    return (
       <div className="relative bg-gradient-to-b from-[#0f2a20] via-[#121815] to-[#08110b] min-h-[140vh] ">

        {/* Background image - সবার নিচে */}
        <div className="absolute inset-0 bg-[url('/rt567.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay z-[0] "></div>

        {/* Content - উপরে */}
        <div className='relative z-[1]  '>


          <div
  className="absolute top-[790px] left-[170px] h-[4px] w-full rounded-full z-[1] "
  style={{
    
   
   minWidth: 'calc(100vh-170px)',
    background: 'linear-gradient(to bottom, #8f8f8f, #e5e5e5, #8f8f8f)',
    boxShadow: '0 0 4px #efefef, 0 0 10px #efefef, 0 0 20px #efefef, 0 0 40px #efefef, 0 0 60px #efefef'
  }}
>
</div>
            <div className='pt-[20px] '>
                <img src="1wr.png" className='w-[185px] h-[185px] ml-[80px]' alt="" />
               {/* Silver line */}
<div
  className="absolute left-[170px] w-[4px] rounded-full z-[1] border-2 border-green-700 "
  style={{
    top: '187px',
    bottom: '0',
    minHeight: 'calc(140vh - 187px)',
    background: 'linear-gradient(to bottom, #8f8f8f, #e5e5e5, #8f8f8f)',
    boxShadow: '0 0 4px #efefef, 0 0 10px #efefef, 0 0 20px #efefef, 0 0 40px #efefef, 0 0 60px #efefef'
  }}
>
</div>





<div className='text-white ml-[200px] '>

  <div >

     <Imageslider imageholder={imageholder}></Imageslider>

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
        <div className="absolute top-[85px] right-[120px] h-[500px] z-[1] ">
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
        </div>

      </div>
    );
};

export default Handlayout;

