import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const HeroSection = ({ title }) => {
  return (
    <section
      className="relative w-full 
                h-[78vh]
                sm:h-[50vh]
                lg:h-[50vh] 
                bg-center bg-no-repeat bg-cover 
                flex items-end justify-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1756478629526-fae9466191f1?q=80&w=1933&auto=format&fit=crop&ixlib=rb")`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white pb-10">
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4">{title}</h1>

        <p className="flex items-center justify-center gap-2 text-sm md:text-base">
          <a href="/" className="hover:underline flex items-center gap-1">
            Home <ChevronRightIcon className="w-4 h-4" />
          </a>
          <span className="flex items-center gap-1">
            {title} <ChevronRightIcon className="w-4 h-4" />
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
