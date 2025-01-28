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
export default function Home() {
  return (
    <div>
      <header className="">
        <h1 className="font-sans font-ultrablack text-7xl tracking-tighter">
          <Globe className="inline" width={69} height={69} />
          mniSIM
        </h1>
        <p className="text-2xl font-mono tracking-tighter">
          Find the best eSIM for your trip!
        </p>
        <Link href={"#footer"}>
          <Button size="lg" className="mt-4 text-lg font-mono tracking-tighter">
            START COMPARING NOW
          </Button>
        </Link>
      </header>
      <br />
      <main>
        <Card>
          <CardHeader>
            <CardTitle>Hi</CardTitle>
          </CardHeader>
          <CardContent>
            <Input></Input>
          </CardContent>
        </Card>
      </main>
      <footer id="footer">hi</footer>
    </div>
  );
}
