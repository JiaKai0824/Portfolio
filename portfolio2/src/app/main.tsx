'use client';
import { useState } from 'react';
import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { BackgroundBeamsWithCollision  } from '@/components/ui/background-beams-with-collision';
import { Boxes } from "@/components/ui/background-boxes";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { cn } from "@/lib/utils";
const Main = () => {


  return (
    <>
    <DummyContent></DummyContent>
    </>
  );
}


const DummyContent = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="h-100 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
       Web Designer & Developer
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Nice to Meet you
      </p>
    </div>
    </BackgroundBeamsWithCollision>
  
  );
};
export default Main;