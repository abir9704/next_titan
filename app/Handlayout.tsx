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


import React from 'react';

const Handlayout = () => {
    return (
       <div className="relative bg-gradient-to-b from-[#0f2a20] via-[#121815] to-[#08110b] min-h-[140vh]">

        <div className='pt-[20px]'>
            <img src="sr.png" className='w-[185px] h-[185px]  ml-[80px] ' alt="" />
        </div>
  
  <div className="absolute inset-0 bg-[url('/rt567.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

  {/* Hexagon */}
<div className="absolute top-[120px] right-[120px] h-[500px] ">
  <svg width="350" height="350" viewBox="0 0 100 100">

    <defs>
      {/* gradient */}
      <linearGradient id="silverFade" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0a0a" />
        <stop offset="30%" stopColor="#bfbfbf" />
        <stop offset="70%" stopColor="#f5f5f5" />
        <stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>

      {/* clip path */}
      <clipPath id="hexClip">
        <polygon points="25,5 75,5 95,50 75,95 25,95 5,50" />
      </clipPath>
    </defs>

    {/* IMAGE (overflow feel with bigger size) */}
   <image
  href="/r809.jpg"
  x="0"
  y="0"
  width="100"
  height="100"
  preserveAspectRatio="xMidYMid slice"
  clipPath="url(#hexClip)"
/>

    {/* BORDER */}
 <g transform="rotate(17 50 50)">
  <polygon
    points="25,5 75,5 95,50 75,95 25,95 5,50"
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