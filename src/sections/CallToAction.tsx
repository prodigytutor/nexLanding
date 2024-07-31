import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import Image from "next/image";
export const CallToAction = () => {
  return (
    <section className="py-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] from-[#EAEEFE] via-[#EAEEFE] to-[#EAEEFE] bg-gradient overflow-x-clip">
    <div className="container">
    <div className="max-w-[540px] mx-auto">
      <div className="md:flex items-center relative">
        <div className="md:w-[548px]">
        <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">What Next
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 text-center">Signup for free today</h2>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6 text-center">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <Image src={StarImage} alt="NexLanding Page" width={360} className="absolute -left-[350px] -top-[137px]" />
        <Image src={SpringImage} alt="NexLanding Page" width={360} className="absolute -right-[350px] -top-[137px]" />
        <div className="flex gap-2 justify-center mt-10">
          <button className="bg-black text-white py-4 px-2 rounded-lg text-md inline-flex items-center justify-center tracking-tight w-full mt-[30px]">
            Get for free
          </button>
          <button className="bg-transparent text-black py-4 px-2 rounded-lg text-md inline-flex items-center justify-center tracking-tight  w-full mt-10">
            <span>Learn more</span><ArrowRight className="h-5 w-5" />
          </button>
          
        </div>
      </div>
      </div>
    </div>
    </div>
    </section>
  );
};
