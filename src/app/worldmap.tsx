"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import type { IVectorMapProps } from "@react-jvectormap/core/dist/types";
//lazy load map
const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false }
);
import { worldMill } from "@react-jvectormap/world";

import { useRouter } from "next/navigation";

import countries from "@/data/countries";

export function InteractiveWorldMap({ id }: { id: string }) {
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
  const router = useRouter();
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
      router.push(`/c/${code}`);
    }
  };

  const mapOptions: IVectorMapProps = {
    map: worldMill,
    zoomOnScroll: false,
    backgroundColor: "transparent",
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
    <div className=" w-full  " id={id}>
      <Card className="p-4 bg-background/10">
        <CardTitle className="">
          <h3 className="text-2xl font-black">
            eSIMs for{" "}
            <small className="font-thin text-lg font-mono tracking-tight">
              (almost)
            </small>{" "}
            every place
          </h3>
          <h4 className="font-normal font-mono tracking-tighter">
            Click on any country to compare the best eSIMS for that country
          </h4>
        </CardTitle>

        <CardContent
          style={{ height: mapHeight }}
          className="bg-transparent w-full"
        >
          {typeof window !== "undefined" && (
            <VectorMap {...mapOptions} onRegionClick={handleRegionClick} />
          )}
        </CardContent>

        <div className=" bg-background/90 p-4 rounded-lg shadow-lg">
          <div className="space-y-2">
            <div className="flex items-center gap-2 inline">
              <div
                className="w-4 h-4 rounded inline"
                style={{ background: "hsl(var(--primary))" }}
              />
              <span className="text-sm inline">eSIMs Available</span>
            </div>
            <div className="flex items-center gap-2 inline">
              <div
                className="w-4 h-4 rounded inline "
                style={{ background: "hsl(var(--muted))" }}
              />
              <span className="text-sm">Coming Soon</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
