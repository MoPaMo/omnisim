import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { WhatAreEsims } from "./whatAreEsims";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-16">
        <h1 className="font-sans font-ultrablack text-7xl tracking-tighter text-white">
          <Globe className="inline" width={69} height={69} />
          mniSIM
        </h1>
        <p className="text-2xl font-mono tracking-tighter text-white">
          Find the best eSIM for your trip!
        </p>
        <Link href={"#footer"}>
          <Button size="lg" className="mt-4 text-lg font-mono tracking-tighter">
            START COMPARING NOW
          </Button>
        </Link>
      </header>
      <main>
        <Card className="container mx-auto px-4 mb-16">
          <CardHeader>
            <CardTitle>Hi</CardTitle>
          </CardHeader>
          <CardContent>
            <Input />
          </CardContent>
        </Card>
        <WhatAreEsims />
      </main>
      <footer id="footer" className="container mx-auto px-4 py-16 text-white">
        hi
      </footer>
    </div>
  );
}
