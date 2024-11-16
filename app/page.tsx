import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { subTitle, title, start } from "@/lib/texts";

function HomePage() {
  return (
    <main className="flex flex-col row-start-2 items-center">
      <Image
        className="rounded-full my-8"
        src="/logo.jpg"
        alt={title}
        width={256}
        height={256}
      />

      <div className="max-w-screen-lg text-center space-y-2 my-8">
        <h1 className="text-6xl">{title}</h1>
        <h2 className="text-4xl">{subTitle}</h2>
        <h2 className="text-2xl">{start}</h2>
      </div>

      <Link href="mailto:mariafilippinilazzari@gmail.com" target="_blank">
        <Button>Scrivimi</Button>
      </Link>
    </main>
  );
}

export default HomePage;
