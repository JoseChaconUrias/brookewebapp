import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ResearchContent from "@/components/ResearchContent";
import React from "react";

const page = () => {
  return (
    <main className="flex p-4 items-center justify-center w-full">
      <div className="w-[75rem]">
        <Hero />
        <ResearchContent />
        <Contact />
      </div>
    </main>
  );
};

export default page;
