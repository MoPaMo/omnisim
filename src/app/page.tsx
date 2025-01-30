import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { WhatAreEsims } from "./whatAreEsims";
import { InteractiveWorldMap } from "./worldmap";
export default function Home() {
  return (
    <div className="min-h-[200vh]">
      {" "}
      <header className="container mx-auto px-4 py-16 min-h-[50vh] grid grid-flow-col gap-8 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="font-sans font-ultrablack text-7xl tracking-tighter text-white">
            <Globe className="inline" width={69} height={69} />
            mniSIM
          </h1>
          <p className="text-2xl font-mono tracking-tighter text-white">
            Find the best eSIM for your trip!
          </p>
          <Link href={"#comparer"}>
            <Button
              size="lg"
              className="mt-4 text-lg font-mono tracking-tighter"
            >
              START COMPARING NOW
            </Button>
          </Link>
        </div> 
        <div className="hidden sm:block">
          <img
            src="/header.svg"
            alt="Image of a phone with an sd card"
            className="h-full transform scale-[1.5] animate-float transition-transform duration-700 ease-in-out hover:scale-[1.7] hover:rotate-[35deg]"
          />
        </div>
      </header>
      <main>
        <WhatAreEsims />
        <InteractiveWorldMap />
      </main>
      <footer id="footer" className="container mx-auto px-4 py-16 text-white">
        hi
      </footer>
    </div>
  );
}
