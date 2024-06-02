import React from 'react'
import { ResearchCards } from './ui/ResearchCards'

const ResearchContent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4 lg:gap-10">
        <h2 className="text-2xl font-extrabold lg:text-5xl">My Research Experience 🔬</h2>
        <div className="">
          <ResearchCards />
        </div>
      </div>
    </div>
  )
}

export default ResearchContent