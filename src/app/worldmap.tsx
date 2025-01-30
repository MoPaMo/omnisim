"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

//lazy load map
const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false }
);
import { worldMill } from "@react-jvectormap/world";

interface Country {
  id: string;
  name: string;
  available: boolean;
}

const countries: Record<string, Country> = {
  US: { id: "US", name: "United States", available: true },
  GB: { id: "GB", name: "United Kingdom", available: true },
  FR: { id: "FR", name: "France", available: true },
  DE: { id: "DE", name: "Germany", available: true },
  ES: { id: "ES", name: "Spain", available: true },
  IT: { id: "IT", name: "Italy", available: true },
  JP: { id: "JP", name: "Japan", available: true },
  AU: { id: "AU", name: "Australia", available: true },
  CA: { id: "CA", name: "Canada", available: true },
  NZ: { id: "NZ", name: "New Zealand", available: true },
  BR: { id: "BR", name: "Brazil", available: true },
};

export function InteractiveWorldMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [mapData, setMapData] = useState<Record<string, number>>({});
  const [mapHeight, setMapHeight] = useState("600px");

  // Initialize map data
  useEffect(() => {
    const initialMapData: Record<string, number> = {};
    Object.keys(countries).forEach((code) => {
      initialMapData[code] = countries[code].available ? 1 : 0;
    });
    setMapData(initialMapData);
  }, []);

  // Update map height based on screen size
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setMapHeight("400px");
      } else if (window.innerWidth < 1024) {
        setMapHeight("500px");
      } else {
        setMapHeight("600px");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const handleRegionClick = (e: any, code: string) => {
    if (countries[code]?.available) {
      setSelectedCountry(code);
    }
  };

  const mapOptions = {
    map: worldMill,
    zoomOnScroll: false,
    panOnDrag: false,
    zoomButtons: false,
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: "hsl(var(--muted))",
        "fill-opacity": 1,
        stroke: "none",
        "stroke-width": 0,
        "stroke-opacity": 0,
      },
      hover: {
        "fill-opacity": 0.8,
        cursor: "pointer",
      },
      selected: {
        fill: "green",
      },
      selectedHover: {
        fill: "#fff",
      },
    },
    series: {
      regions: [
        {
          attribute: "fill",
          values: mapData,
          scale: ["green"],
          normalizeFunction: "polynomial",
        },
      ],
    },
  };

  return (
    <div className="relative w-full">
      <Card className="p-4">
        <div style={{ height: mapHeight }} className="relative">
          {typeof window !== "undefined" && (
            <VectorMap {...mapOptions} onRegionClick={handleRegionClick} />
          )}
        </div>

        <div className="absolute bottom-4 right-4 bg-background/90 p-4 rounded-lg shadow-lg">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ background: "hsl(var(--primary))" }}
              />
              <span className="text-sm">eSIMs Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ background: "hsl(var(--muted))" }}
              />
              <span className="text-sm">Coming Soon</span>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <div className="relative group">
            <Button variant="ghost" size="icon">
              <Info className="h-4 w-4" />
            </Button>
            <div className="absolute right-0 w-64 p-2 rounded-lg bg-background shadow-lg border hidden group-hover:block z-10">
              <p className="text-sm text-muted-foreground">
                Click on a country to view available eSIM plans. Colored regions
                indicate where eSIMs are currently available.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
