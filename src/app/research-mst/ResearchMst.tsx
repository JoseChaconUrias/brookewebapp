import { Highlight } from "@/components/ui/HeroHighlight";
import React from "react";

const ResearchMst = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 lg:px-20 bg-black">
      <div className="h-[50rem] w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-extrabold">
            Missouri S&T Research Assistant
          </h1>
          <Highlight className="text-center font-bold rounded-xl p-4 lg:text-3xl lg:col-span-3">
            Utlized pipetting, centrifugation, and handled harsh chemicals to conduct experiments on Bradryhizobium japonicum
          </Highlight>
          <div className="relative grid gap-2 lg:gap-5 grid-cols-3">
            <div className="text-gray-300 hover:text-white font-bold rounded-xl p-4 outline outline-purple-200 hover:outline-purple-300 text-sm lg:text-2xl lg:row-span-2 bg-zinc-950">
            Introduced the bacteria into a nutrient-rich broth culture environment, initiating their growth and allowing us to closely monitor their behavior and interactions within this conducive medium
            </div>
            <div className="text-gray-300 hover:text-white font-bold rounded-xl p-4 outline outline-purple-200 hover:outline-purple-300 text-sm lg:text-2xl lg:col-span-2 bg-zinc-950">
                Used various chemical indicators to help us pinpoint and measure quorum sensing in bacteria
            </div>
            <div className="text-gray-300 hover:text-white font-bold rounded-xl outline outline-purple-200 hover:outline-purple-300 p-4 text-sm lg:text-2xl bg-zinc-950">
              Created Stock media of bacterial strains needed for future
              experiments
            </div>
            <div className="text-gray-300 hover:text-white font-bold rounded-xl p-4 outline outline-purple-200 hover:outline-purple-300 text-sm lg:text-2xl bg-zinc-950">
                Employed thin-layer chromatography, a versatile separation technique, to meticulously analyze and separate the components of our samples
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchMst;
