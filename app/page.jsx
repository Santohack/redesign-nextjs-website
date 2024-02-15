import { CarouselDemo } from "@/components/slider";
import Image from "next/image";

export default function Home() {
  return (
<main className="flex relative z-50 min-h-screen flex-col items-center justify-between py-3">
      <CarouselDemo />
      <h1>Hello</h1>
    </main>
  );
}
