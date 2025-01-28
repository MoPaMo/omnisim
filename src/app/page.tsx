import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="">
      <h1 className="font-sans font-ultrablack text-7xl tracking-tighter">
        <Globe className="inline" width={69} height={69} />
        mniSIM
      </h1>
      <p className="text-2xl font-mono tracking-tighter">
        The best SIM card for your needs
      </p>
      <Button size="lg" className="mt-4 text-lg font-mono tracking-tighter">
        START COMPARING NOW
      </Button>
    </div>
  );
}
