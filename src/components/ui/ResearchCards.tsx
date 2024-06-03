"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./BackgroundGradient";
import Link from "next/link";

export function ResearchCards() {
  return (
    <div className="flex flex-col lg:flex-row gap-20">
      <Link href="#">
        <BackgroundGradient className="rounded-[22px] h-full max-w-[30rem] p-4 sm:p-10 bg-zinc-900">
          <h2 className="text-center font-bold lg:text-2xl">Food Innovation Center at the University of Nebraska-Lincoln</h2>
          <div className="flex flex-col gap-10 items-center justify-center mt-10">
              <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src="/university-of-nebraska-lincoln.svg"
                    alt="unl"
                    width={100}
                    height={100}
                    className="object-contain"
                />
              </div>
              <p className="text-xl font-lightbold">The Microbial Menace: Advances in Understanding and Combating C. difficile</p>            
          </div>

        </BackgroundGradient>        
      </Link>
      <Link href="#">
        <BackgroundGradient className="rounded-[22px] h-full max-w-[30rem] p-4 sm:p-10 bg-zinc-900">
          <h2 className="text-center font-bold lg:text-2xl">Missouri University of Science & Technology</h2>
          <div className="flex flex-col gap-10 items-center justify-center mt-10">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image
                  src="/missouri-st.png"
                  alt="unl"
                  width={100}
                  height={100}
                  className="object-contain"
              />            
            </div>
            <p className="text-xl font-lightbold">Harnessing Soil Bacteria for Enhanced Drought Tolerance in Crops</p>              
          </div>
        </BackgroundGradient>
      </Link>
    </div>
  );
}