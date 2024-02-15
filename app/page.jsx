import FooterBanner from "@/components/Footerbanner";
import Banner from "@/components/banner";
import { CardWithForm } from "@/components/card";
import { CarouselDemo } from "@/components/slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex relative z-50 min-h-screen flex-col items-center justify-between py-3">
      <CarouselDemo />
      <div className="flex flex-col justify-center items-center gap-6 text-3xl font-bold py-4 md:text-center">
        <h3 className="flex text-3xl justify-center items-center font-bold max-md:text-md">
          Contact Scott Asbestos Today For An Estimate
        </h3>
        <Button
          className="flex md:h-[60px] text-md justify-center items-center m-4 py-4 bg-[#FF941A] hover:bg-[#8A9A5B] border-[1px solid #FF941A] text-white"
          asChild
        >
          <Link href="/contact">Request An Online Estimate</Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 my-5">
        <CardWithForm img="/image1.png" label="Lead Remediation" />
        <CardWithForm img="/image2.png" label="Asbestos Abatement" />
        <CardWithForm img="/image3.png" label="Mold Remediation" />
        <CardWithForm img="/image1.png" label="Lead Remediation" />
        <CardWithForm img="/image2.png" label="Asbestos Abatement" />
        <CardWithForm img="/image3.png" label="Mold Remediation" />
      </div>

      <div className="py-10">
        <Banner />
      </div>
      <div className="flex flex-col justify-center items-center gap-6 text-3xl font-bold py-4 md:text-center">
        <h3 className="flex text-3xl justify-center items-center font-bold max-md:text-md">
          Contact Scott Asbestos Today For An Estimate
        </h3>
        <Button
          className="flex md:h-[60px] text-md justify-center items-center m-4 py-4 bg-[#FF941A] hover:bg-[#8A9A5B] border-[1px solid #FF941A] text-white"
          asChild
        >
          <Link href="/contact">Request An Online Estimate</Link>
        </Button>
      </div>
      <div className=" flex w-full md:w-[1141px] ">
        <div className=" p-4">
          <h1 className="text-4xl font-bold mb-4">Lead Abatement</h1>
          <p className="text-gray-600">
            Commonly used in paints and coatings, lead is still found in many
            older homes in Vancouver’s Lower Mainland. Removing lead-based paint
            or demolishing walls that are coated with lead can release lead dust
            into the air which could be breathed in if not wearing proper masks.
          </p>
        </div>
      </div>
      <div className="py-10">
        <FooterBanner />
      </div>
    </main>
  );
}
