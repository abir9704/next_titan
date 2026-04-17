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



import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import spreadfont from 'next/font/local';

import 'swiper/css';
// import 'swiper/css/pagination';

import './styles.css';

// import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { IoCloseCircleSharp } from 'react-icons/io5';



const myFont = spreadfont({
  src: './font/spread.otf',
  weight: '400',
  style: 'normal'
})

type ImageType = {
  image: string;
  uploaded_date?: string;
  caption?: string;
};

const Imageslider = ({ imageholder }: { imageholder: ImageType[] }) => {

 const [modalobj, setmodalobj] = useState<ImageType | null>(null);
 const [modalopen, setmodalopen] = useState(false);

  const audio = new Audio("/rtx.mp3");

 const openmodal = (simage: ImageType) => {
    console.log(simage);
    setmodalobj(simage);
    setmodalopen(true);
  }

  const handlemodal=()=>{
    setmodalopen(false);
    setmodalobj(null);
  }

  const soundplay=()=>{

    audio.currentTime = 0;
    audio.play();

  }
  return (
    <div className="w-full mt-[430px] px-4 relative cursor-pointer">
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
            <div onClick={()=>openmodal(singleimage)} className="slideBox">
              <img src={singleimage.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <div onClick={soundplay} className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white">
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
  <div onClick={soundplay} className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white">
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
  {

    modalopen &&  <div>

      <div className='fixed inset-0 flex items-center justify-center bg-black/90 z-50 '>

      <div className='grid grid-cols-7 w-[950px] '>

            <div className=' h-auto flex justify-center items-center  bg-black col-span-4 '>

              <div className=''>

                <img src={modalobj?.image} className='w-full h-auto'/>
          <IoCloseCircleSharp onClick={handlemodal} size={40}  className='text-blue-800 absolute top-5 right-5'/>

              </div>

          
          

        </div>

      <div className="relative col-span-3 bg-[#0c201a]">
  
  <div className="absolute inset-0 bg-[url('/rtz.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none"></div>

  <div className={`relative p-4 ${myFont.className} text-[#a3842e] text-shadow-amber-800 text-4xl `} >
    <p className='pl-4 pt-5'>Date Uploaded: {modalobj?.uploaded_date}</p>
    <p className='mt-3 pl-4 text-5xl'>{modalobj?.caption}</p>
  </div>

</div>


      </div>
       
      
  </div>


  </div>
    
  }

 


    </div>
  );
};

export default Imageslider;