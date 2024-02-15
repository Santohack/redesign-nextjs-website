import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function CardWithForm({ img, label }) {
  return (
    <Card className="relative group w-full md:w-[350px] max-md:w-[350px] h-[280px] p-4 border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="relative overflow-hidden aspect-w-4 aspect-h-3">
        <Image
          src={img}
          alt="logo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="cursor-pointer transition-transform duration-300 transform group-hover:scale-100"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-black text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <h3 className="text-md font-bold">{label}</h3>
      </div>
    </Card>
  );
}
