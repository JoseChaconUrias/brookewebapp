import React from 'react'
import { ResearchCards } from './ui/ResearchCards'
import Image from 'next/image'

const ResearchContent = () => {
  return (
    <div id="research" className="flex items-center justify-center h-screen p-8 lg:p-20">
      <div className="flex flex-col gap-4 lg:gap-20 w-full items-center">
        <h2 className="text-2xl font-extrabold text-center lg:text-5xl">My Research Experience 🔬</h2>
        <div>
          <ResearchCards />
        </div>
        <Image src="/kirby.webp" alt="kirby" width={300} height={300} />

      </div>
    </div>
  )
}

export default ResearchContent