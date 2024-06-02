"use client";
import Image from "next/image";
import React from "react";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <HeroHighlight className="w-full p-8">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          <div className="flex flex-col gap-10 justify-between items-center lg:flex-row-reverse w-full">
            <Image
              src="/brookePortrait.jpg"
              alt="photo"
              width={300}
              height={300}
              className="rounded-full"
            />
            <section className="flex flex-col gap-2 lg:gap-4">
              <h1 className="text-2xl font-extrabold md:text-3xl lg:text-5xl">Microbiology and Biochemistry Undergraduate</h1>
              <p className="text-xl font-semibold md:text-2xl lg:text-3xl">
                Hello, I'm Brooke McCartney with interests in Microbes and DNA
                🧬🧪
              </p>
              <span>
                <Highlight className="text-md md:text-lg lg:text-xl">View more about me</Highlight>
              </span>
            </section>
          </div>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
