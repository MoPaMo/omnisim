import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPinOff, Sticker } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4 text-white">
      <div className="text-center max-w-md w-full">
        <div className="flex justify-center mb-6">
          <MapPinOff className="w-24 h-24 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Country page not implemented yet{" "}
        </h1>
        <p className="text-muted-foreground mb-6">
          Due to the high seas deadline, I was unable to implement this page on
          time, so for now you can just admire the design <Sticker className="inline"/>.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="/">Go Back</Link>
          </Button>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
