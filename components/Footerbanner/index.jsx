import Image from "next/image";
import React from "react";

const FooterBanner = () => {
  return (
    <main className="grid grid-cols-2 w-full md:w-[1141px] max-md:w-[350px] h-[380px] p-4">
      <div className=" pr-7 flex items-center justify-center overflow-hidden">
        <Image
          className=" transform hover:scale-105 transition-transform duration-300 object-cover rounded-3xl"
          src="/1.jpg"
          alt="Your Image"
          width={600}
          height={800} // Adjust the height as needed
          priority
        />
      </div>
      {/* Left Side - Title and Description (50%) */}
      <div className="pl-4 prose">
        <h1 className="text-4xl font-bold mb-2">Mould Removal</h1>
        <p className="text-gray-600">
          Mould is often caused when certain surfaces are exposed to moisture
          for a prolonged period of time. In some cases, mould in a home or work
          space can cause frequent illnesses, and can also lead to the
          development of allergies. At Scott Asbestos, we take great care in
          ensuring any and all traces of mould contamination are completely
          removed from your home or commercial property. Mould can be easily
          spread through the air when disturbed, which is why we are careful to
          follow strict containment precautions during the cleaning process to
          keep the mould isolated as we remove it fully. Contact us today to get
          started on removing the dangerous mould contamination on your
          property.
        </p>
      </div>

      {/* Right Side - Image (50%) */}
    </main>
  );
};

export default FooterBanner;
