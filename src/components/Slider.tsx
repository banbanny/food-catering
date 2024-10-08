"use client"; // This might be necessary based on your Next.js version
import { useEffect, useState } from 'react';
import Image from 'next/image';

const data = [
    { id: 1, title: "KUYA CARD'S", image: "/yum.jpg" },
    { id: 2, title: "sadkadhkjadh kasdhjksdhsakd", image: "/foods.webp" },
    { id: 3, title: "jakdhjasd kashdkasdhd", image: "/catering.png" },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0); 

   // useEffect(() => {
       // const interval = setInterval(
          //  () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)), 
         //   2000 // Change slide every 2 seconds
     //   );
      //  return () => clearInterval(interval); // Clean up on unmount
   /// }, []);

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(120vh-9rem)] lg:flex-row">
            {/* TEXT CONTAINER */}
            <div className='h-1/2 flex items-center justify-center flex-col gap-2 text-red-500   font-bold'>
                <h1 
                    className={`text-center md:p-10 p-4 md:text-2xl xl:text-5xl ${data[currentSlide].id === 1 ? 'text-sm' : 'text-5xl'}`} // Smaller text for id 1
                >
                    {data[currentSlide] ? data[currentSlide].title : "Loading..."}
                </h1>
                <button className='bg-red-500 text-white py-4 px-8 rounded'> ORDER NOW </button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className='w-full h-1/2 relative'>
                <Image 
                    src={data[currentSlide].image} 
                    alt={data[currentSlide] ? data[currentSlide].title : "Loading..."} 
                    fill 
                    className="object-cover" 
                />
            </div>
        </div>
    )
};

export default Slider;
