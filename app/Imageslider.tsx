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

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';

const Imageslider = ({ imageholder }) => {
  return (
    <div className="w-full mt-[430px] px-4">
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
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
    </div>
  );
};

export default Imageslider;