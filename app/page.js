import Image from "next/image";
import Hero from "./_components/Hero";
import { TimelineDemo } from "./_components/Timeline";
import Benefits from "./_components/Benefits";

export default function Home() {
  return (
    <div className='overflow-x-hidden space-y-10'>
      <Hero />
      
      <Benefits />

      <TimelineDemo />
    </div>
  );
}
