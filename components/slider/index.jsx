"use client";
import * as React from "react";
import { useState } from "react";
import { NavImage } from "@/utills/navlink";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Button } from "../ui/button";
export function CarouselDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? NavImage.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === NavImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1500px] max-md:w-[400px] h-[780px] w-full m-auto relative group py-6">
      <div className="text-3xl font-bold absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-10">
        <h3 className="text-3xl font-bold my-3 text-white">
          Lead & Asbestos Abatement Mold Remediation
        </h3>{" "}
        <Button className="flex bg-[#FF941A] py-3 hover:bg-[#8A9A5B] border-red-100 text-white">
          <a href="tel:17789000806">Call For An Estimate</a>
        </Button>
      </div>

      <div
        style={{ backgroundImage: `url(${NavImage[currentIndex].img})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center ">
        {NavImage.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
