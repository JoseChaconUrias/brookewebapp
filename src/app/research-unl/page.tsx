import React from 'react'
import ResearchUnl from './ResearchUnl';
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full">
        <ResearchUnl />
        <h1 className="text-3xl text-center mb-10">Positive Twitching</h1>
        <div className="flex flex-col justify-center gap-20 items-center md:flex-row md:mb-20">
          <div className="outline rounded-xl">
            <Image
              src="/positiveTwitching1.jpeg"
              alt="photo"
              height={300}
              width={300}
              className="rounded-xl w-full h-80 object-contain"
            />            
          </div>

          <div className="outline rounded-xl">
            <Image
              src="/positiveTwitching2.jpeg"
              alt="photo"
              height={300}
              width={300}
              className="rounded-xl w-full h-80 object-contain"
            />            
          </div>

        </div>
      </div>
    </div>
  )
}

export default page;