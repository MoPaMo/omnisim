import { Download, Smartphone, Wifi } from "lucide-react";

export function WhatAreEsims() {
  return (
    <section className="flex w-full min-h-screen bg-muted/10 text-white">
      <div className="container px-4 flex items-center justify-center flex-col my-auto py-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              What are eSIMs?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              An eSIM (embedded SIM) is a digital SIM that allows you to
              activate a cellular plan without using a physical SIM card.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3 w-full justify-items-center">
          <div className="relative flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Download className="h-10 w-10 text-primary" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-semibold">1. Purchase & Download</h3>
              <p className="mt-1 text-sm text-muted-foreground font-mono tracking-tighter">
                Buy an eSIM plan and receive a QR code / magic link
              </p>
            </div>
            <div className="absolute hidden h-2 w-full top-10 left-full md:block">
              <div className="h-0.5 w-full bg-primary/30" />
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Smartphone className="h-10 w-10 text-primary" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-semibold">2. Scan & Install</h3>
              <p className="mt-1 text-sm text-muted-foreground font-mono tracking-tighter">
                Scan QR code or click a link on your device
              </p>
            </div>
            <div className="absolute hidden h-2 w-full top-10 left-full md:block">
              <div className="h-0.5 w-full bg-primary/30" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Wifi className="h-10 w-10 text-primary" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-semibold">3. Connect & Go</h3>
              <p className="mt-1 text-sm text-muted-foreground font-mono tracking-tighter">
                Activate and enjoy instant connectivity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
