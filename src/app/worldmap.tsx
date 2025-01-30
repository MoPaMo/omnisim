"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import type { IVectorMapProps } from "@react-jvectormap/core/dist/types";
//lazy load map
const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false }
);
import { worldMill } from "@react-jvectormap/world";

import Router from "next/router";

import countries  from "@/data/countries";

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

  const mapOptions: IVectorMapProps = {
    map: worldMill,
    zoomOnScroll: false,
    backgroundColor: "#0000",
    regionStyle: {
      initial: {
        stroke: "none",
        fill: "hsl(var(--muted))",
      },
      hover: {
        cursor: "pointer",
      },
      selected: {
        fill: "#f3f31b",
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
          scale: ["#f3f31b"], 
          normalizeFunction: "polynomial",
        },
      ],
    },
  };

  return (
    <div className="relative w-full bg-background/10">
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
