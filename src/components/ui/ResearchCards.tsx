"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./BackgroundGradient";
import Link from "next/link";

export function ResearchCards() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
      
        <BackgroundGradient className="flex items-center rounded-[22px] h-full max-w-[30rem] bg-zinc-900">
          <Link href="/research-unl" className="p-4 sm:p-10 h-full">
          <h2 className="text-center font-bold lg:text-2xl">Food Innovation Center at the University of Nebraska-Lincoln</h2>
          <div className="flex flex-col gap-4 lg:gap-10 items-center justify-center mt-10">
              <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src={`${process.env.NODE_ENV === 'production' ? '/brookewebapp' : ''}/university-of-nebraska-lincoln.svg`}
                    alt="unl"
                    width={100}
                    height={100}
                    className="object-contain"
                />
              </div>
              <p className="text-center lg:text-xl font-lightbold">The Microbial Menace: Advances in Understanding and Combating C. difficile</p>            
          </div>
          </Link>
        </BackgroundGradient>        
      

      
        <BackgroundGradient className="flex items-center rounded-[22px] h-full max-w-[30rem] bg-zinc-900">
          <Link href="/research-mst" className="p-4 sm:p-10 h-full">
          <h2 className="text-center font-bold lg:text-2xl">Missouri University of Science & Technology</h2>
          <div className="flex flex-col gap-4 lg:gap-10 items-center justify-center mt-10">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/brookewebapp' : ''}/missouri-st.png`}
                  alt="unl"
                  width={100}
                  height={100}
                  className="object-contain"
              />            
            </div>
            <p className="text-center lg:text-xl font-lightbold">Harnessing Soil Bacteria for Enhanced Drought Tolerance in Crops</p>              
          </div>
          </Link>          
        </BackgroundGradient>

    </div>
  );
}
