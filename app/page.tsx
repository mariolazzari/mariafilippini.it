import Link from "next/link";

import { Button } from "@/components/ui/button";
import { title } from "@/locales/texts";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <h1 className="text-5xl">{title}</h1>

      <Link href="mailto:mariafilippinilazzari@gmail.com" target="_blank">
        <Button>Scrivimi</Button>
      </Link>
    </main>
  );
}
