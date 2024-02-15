import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <main className="grid grid-cols-2 w-full md:w-[1141px] max-md:w-[350px] h-[380px] p-4">
      {/* Left Side - Title and Description (50%) */}
      <div className="pr-4 prose ">
        <h1 className="text-4xl font-bold mb-2">Asbestos Removal</h1>
        <p className="text-gray-600">
          Scott Asbestos is here to provide help with the removal and disposal
          of virtually all types of dangerous or hazardous material. We are
          pleased to help keep homes, workplaces and communities free of all
          types of harmful materials from mould and asbestos to bio-hazardous
          waste. When you need a toxic mess safely removed and properly cleaned,
          Scott Asbestos is ready to answer your call. We feature a team of
          fully trained and certified waste disposal professionals who will
          provide a complete cleaning of whatever type of hazardous mess you
          have on your hands. We have all the necessary training and equipment
          to tackle whatever major issue you need cleaned. Whether
        </p>
      </div>

      {/* Right Side - Image (50%) */}
      <div className=" pl-4 flex items-center justify-center overflow-hidden">
        <Image
          className=" transform hover:scale-105 transition-transform duration-300 object-cover rounded-3xl"
          src="/1.jpg"
          alt="Your Image"
          width={600}
          height={800} // Adjust the height as needed
          priority
        />
      </div>
    </main>
  );
};

export default Banner;
