import React from "react";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

export const Hero = () => {
  return (
    <section className="py-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] from-[#EAEEFE] via-[#EAEEFE] to-[#EAEEFE] bg-gradient overflow-x-clip">
    <div className="container">
      <div className="md:flex items-center">
        <div className="md:w-[478px]">
        <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Beta Version releasing soon
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to success</h1>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6">Celebrate the joy of success with an app designed to reinforce and build upon your knowledge, instill confidence,
          and set you up to succeed</p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="bg-black text-white py-4 px-2 rounded-lg text-md inline-flex items-center justify-center tracking-tight">Get for free</button>
          <button className="bg-transparent text-black py-4 px-2 rounded-lg text-md inline-flex items-center justify-center tracking-tight"><span>Learn more</span>
          <ArrowIcon className="h-5 w-5" /></button>
          </div>
      </div>
      <div className="mt-20 md:mt-0 md:h-[640px] md:flex-1 relative">
        <Image src={cogImage} width={500} height={500} alt="NexLanding Page" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0" />
        <Image src={cylinderImage} width={220} height={220} alt="Cylinder Image" className="hidden md:block -top-8 -left-32 md:absolute" />
        <Image src={noodleImage} width={220} height={220} alt="Interview Prep" className="hidden lg:block absolute top-[524px] rotate-[30deg]" />
      </div>
    </div>
    </div>
    </section>
  );
};
