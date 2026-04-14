// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';


// const Imageslider = ({imageholder}) => {
//     return (
//           <div  className=' absolute top-[565px]  '>

//              <Swiper
//         slidesPerView={6}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >

//            {
//       imageholder.map((singleimage,index)=>{
//         return(
//             <SwiperSlide key={index}>

//                    <div className='border-7 border-[#c2c2c2]' >
//              <img className='w-[230px] h-[254px] object-cover' src={singleimage.image} alt="" />
//           </div>

//             </SwiperSlide>
       
//         )
//       })
//     }



//       </Swiper>
 
//   </div>
//     );
// };

// export default Imageslider;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

import 'swiper/css';
// import 'swiper/css/pagination';

import './styles.css';

// import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const Imageslider = ({ imageholder }) => {
  return (
    <div className="w-full mt-[430px] px-4 relative">
      <Swiper
        spaceBetween={10}
        // pagination={{ clickable: true }}
        // navigation={true}
       
          navigation={{
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    }}
     modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1536: { slidesPerView: 6 },
        }}
        className="mySwiper"
      >
        {imageholder?.map((singleimage, index) => (
          <SwiperSlide key={index}>
            <div className="slideBox">
              <img src={singleimage.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <div className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white">
    <ChevronLeft
  size={65}
  className="
    text-[#e6e6e6]
    drop-shadow-[0_0_8px_#d3d3d3]
    drop-shadow-[0_0_16px_#d3d3d3]
    drop-shadow-[0_0_32px_#ffffff]
    hover:drop-shadow-[0_0_12px_#ffffff]
    hover:drop-shadow-[0_0_24px_#ffffff]
    hover:drop-shadow-[0_0_48px_#ffffff]
    transition-all duration-300
  "
/>
  </div>

  {/* RIGHT */}
  <div className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white">
<ChevronRight
  size={65}
  className="
    text-[#e6e6e6]
    drop-shadow-[0_0_8px_#d3d3d3]
    drop-shadow-[0_0_16px_#d3d3d3]
    drop-shadow-[0_0_32px_#ffffff]
    hover:drop-shadow-[0_0_12px_#ffffff]
    hover:drop-shadow-[0_0_24px_#ffffff]
    hover:drop-shadow-[0_0_48px_#ffffff]
    transition-all duration-300
  "
/>
  </div>

    </div>
  );
};

export default Imageslider;