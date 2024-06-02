"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./BackgroundGradient";

export function ResearchCards() {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <BackgroundGradient className="rounded-[22px] h-full max-w-[30rem] p-4 sm:p-10 bg-zinc-900">
        <h2 className="text-center font-bold lg:text-2xl">Food Innovation Center at the University of Nebraska-Lincoln</h2>
        <div className="flex flex-col items-center justify-center mt-4">
            <Image
                src="/university-of-nebraska-lincoln.svg"
                alt="unl"
                width={100}
                height={100}
                className="flex"
            />            
        </div>

      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] h-full max-w-[30rem] p-4 sm:p-10 bg-zinc-900">
        <h2 className="text-center font-bold lg:text-2xl">Missouri University of Science & Technology</h2>
        <div className="flex flex-col items-center justify-center mt-4">
            <Image
                src="/missouri-st.png"
                alt="unl"
                width={100}
                height={100}
                className="flex"
            />            
        </div>

      </BackgroundGradient>
    </div>
  );
}
