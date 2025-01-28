import { Globe } from "lucide-react";

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
    </div>
  );
}
