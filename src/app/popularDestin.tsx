import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { MapPin } from "lucide-react";

export default function popularDestinations() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground">
            Find eSIM plans for these frequently visited locations
          </p>
        </div>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            "United States",
            "Europe",
            "United Kingdom",
            "Japan",
            "Australia",
            "Canada",
            "Thailand",
            "Singapore",
          ].map((destination) => (
            <Card key={destination} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/"
                    alt={destination}
                    width={300}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-white">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">{destination}</span>
                    </div>
                    <Button size="sm" variant="secondary">
                      View Plans
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
