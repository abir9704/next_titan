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
import React, { useEffect, useState } from 'react';

const Handlayout = () => {
  const [imageholder,setimageholder] = useState([]);

  useEffect(()=>{

    fetch("/imagedata.json")
    .then(res=>res.json())
    .then(data=>setimageholder(data.gallery))

  },[])
    return (
       <div className="relative bg-gradient-to-b from-[#0f2a20] via-[#121815] to-[#08110b] min-h-[140vh]">

        {/* Background image - সবার নিচে */}
        <div className="absolute inset-0 bg-[url('/rt567.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay z-[0]"></div>

        {/* Content - উপরে */}
        <div className='relative z-[1] '>
            <div className='pt-[20px]'>
                <img src="1wr.png" className='w-[185px] h-[185px] ml-[80px]' alt="" />
               {/* Silver line */}
<div
  className="absolute left-[170px] w-[4px] rounded-full z-[1]"
  style={{
    top: '187px',
    bottom: '0',
    minHeight: 'calc(140vh - 187px)',
    background: 'linear-gradient(to bottom, #8f8f8f, #e5e5e5, #8f8f8f)',
    boxShadow: '0 0 4px #efefef, 0 0 10px #efefef, 0 0 20px #efefef, 0 0 40px #efefef, 0 0 60px #efefef'
  }}
>
</div>


<div
  className=" mt-[485px] ml-[170px] h-[4px] w-screen rounded-full z-[1]"
  style={{
    top: '187px',
    bottom: '0',
   
    background: 'linear-gradient(to bottom, #8f8f8f, #e5e5e5, #8f8f8f)',
    boxShadow: '0 0 4px #efefef, 0 0 10px #efefef, 0 0 20px #efefef, 0 0 40px #efefef, 0 0 60px #efefef'
  }}
>
</div>

<div className='text-white ml-[300px]'>
  <div className='w-[468px] h-[468px] absolute top-[565px]'>

     <img className='w-[230px] h-[254px] object-cover' src="33.jpg" alt="" />

  </div>

  <div>
    {
      imageholder.map((singleimage,index)=>{
        return(
          <div key={index}>
             <img src={singleimage.image} alt="" />
          </div>
        )
      })
    }
  </div>
 
</div>
            </div>
        </div>

        {/* Hexagon - উপরে */}
        <div className="absolute top-[85px] right-[120px] h-[500px] z-[1]">
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

