import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-4xl text-destructive">404</h2>
      <h3 className="text-3xl">Pagina non trovata</h3>
      <p className="text-lg">
        La pagina richiesta non è stata trovata sul nostro server
      </p>

      <Link className="mt-8" href="/">
        <Button>
          <Home /> Home
        </Button>
      </Link>
    </div>
  );
}
