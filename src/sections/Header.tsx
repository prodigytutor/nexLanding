"use client"
import ArrowRight from "@/assets/arrow-right.svg";
//import Logo from "../../../assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import {redirect} from "next/navigation";
import Link from "next/link";
export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Say goodbye to pre-interview jitters, and hello new opportunities.</p>
        <div className="inline-flex gap-1 items-center">
          <Link href="https://admin.nexai.network/forms-new/58324-tXzTLvJx7r3c4GjkBmSY"><span>Get Started for Free  </span>
          <ArrowRight className="h-4 w-4 inline-flex justify-center " /></Link>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
          <Image src="/ai-interviewz-logo-dark.png" alt="NexLanding Page" height={48} width={48} />
          <MenuIcon className="h-5 w-4 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <a href="#">About</a>
            <button className="bg-black text-white py-4 px-2 rounded-lg text-md inline-flex items-center justify-center tracking-tight">Get For Free</button>
          </nav>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Navbar;