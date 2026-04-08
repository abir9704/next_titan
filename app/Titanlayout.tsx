import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Titanlayout = () => {
    const [imageset,setimage]=useState ([]);
    useEffect(()=>{

        fetch('/Imagedata.json')
        .then(res=>res.json())
        .then(data=>setimage(data.gallery))

    },[])
    return (
        <div className="bg-gradient-to-b from-[#1a1c18] via-[#0e0f0d] to-[#080808] min-h-screen" >

            <p className='text-3xl'>jdjfdjf</p>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-10/12 mx-auto mt-70">
  {imageset?.map((singleimage, index) => (
    <div
      key={index}
      className="relative w-full aspect-[4/5] overflow-hidden rounded-lg"
    >
     <Image
    src={singleimage.image}
    alt={singleimage.caption}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 300px"
  />
    </div>
  ))}
</div>
            
        </div>
    );
};

export default Titanlayout;