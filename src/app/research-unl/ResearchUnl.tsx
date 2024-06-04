import { Highlight } from '@/components/ui/HeroHighlight';
import React from 'react'

const ResearchUnl = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 lg:px-20 bg-black">
      <div className="h-[50rem] w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold">Food Innonvation Research Assistant</h1>
        <Highlight className="text-center font-bold rounded-xl p-4 lg:text-3xl lg:col-span-3">
            Polymerase Chain Reaction (PCR) skills to identity plus protiens in Clostridium difficile
          </Highlight>
        <div className="relative grid lg:gap-5 grid-cols-3">
          <div className="text-gray-300 hover:text-white font-bold rounded-xl p-4 outline outline-purple-200 hover:outline-purple-300 lg:text-2xl lg:row-span-2 bg-zinc-950">
          Attend weekly meetings with Ph.D and Masters students where they showcase research for conferences and qualifying exams
          </div>
          <div className="text-gray-300 hover:text-white font-bold rounded-xl p-4 outline outline-purple-200 hover:outline-purple-300 lg:text-2xl lg:col-span-2 bg-zinc-950">
            Preparing agar media for growth plates and prepare specialized media recipes for assay plates
          </div>
          <div className="text-gray-300 hover:text-white font-bold rounded-xl outline outline-purple-200 hover:outline-purple-300 p-4 lg:text-2xl bg-zinc-950">
            Creating Stock media of bacterial strains needed for future experiments
          </div>
          <div className="text-gray-300 hover:text-white font-bold rounded-xl p-4 outline outline-purple-200 hover:outline-purple-300 lg:text-2xl bg-zinc-950">
            Twitching and surface motility assays to identify the way Clostridium Difficle adheres to the gut lining
          </div>
        </div>        
      </div>

    </div>
      
    </div>
  )
}

export default ResearchUnl;