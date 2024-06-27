"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../gitils/cn";
export default function BackgroundBoxesDemo() {
  return (
    <>
      <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        <Boxes />
        <div className="relative z-30 flex flex-col items-center">
          <h1 className={cn("mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400")}>
            It&apos;s Muhammad
          </h1>
          
          <p className="text-center mt-2 text-neutral-300">
            Muhammad bin Zohaib is a dynamic web developer known 
            <br />
            for crafting innovative digital experiences. With expertise in 
            <br />
            front-end and back-end development, he creates sleek
            <br />
            websites and complex web applications.
            <br />
            <br />
            <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Hire Me
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
