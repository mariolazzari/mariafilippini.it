import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { subTitle, title, start } from "@/lib/texts";
import { Mail } from "lucide-react";
import { CardImageProps } from "@/components/CardImage/CardImageProps";
import { CardImage } from "@/components/CardImage";

function HomePage() {
  const cards: Omit<CardImageProps, "href">[] = [
    {
      title: "Per le compagnie amatoriali",
      subtitle:
        "Vasta gamma di commedie brillanti su soggetti d'attualità, atti unici, farse, scenette, cabaret...",
      imageSrc: "/images/companies.jpg",
    },
    {
      title: "Per i professionisti",
      subtitle: "Drammi e monologhi.",
      imageSrc: "/images/pro.jpg",
    },
    {
      title: "Per le scuole inferiori",
      subtitle: "Favole e altri testi divertenti, ma educativi.",
      imageSrc: "/images/kinder.jpg",
    },
    {
      title: "Per le scuole superiori",
      subtitle:
        "Sceneggiature di opere di autori classici: Plauto, Aristofane. Platone, Gogol, Dostoevskij, Lagerkvist,Dickens, Molière, Lessing, Manzoni.",
      imageSrc: "/images/students.jpg",
    },
    {
      title: "Per centri per anziani",
      subtitle:
        "Testi brevi e divertenti, commisurati alle capacità mnemoniche, su soggetti di loro interesse: truffe agli anziani, prevenzione incidenti domestici.",
      imageSrc: "/images/old.jpg",
    },
    {
      title: "Temi religiosi e ricorrenze",
      subtitle:
        "  Natale, Via Crucis, la religiosità dei Disciplini, sceneggiature tratte dai testi di don Primo Mazzolari, I guerra mondiale, la Shoah, la festa della donna",
      imageSrc: "/images/religion.jpg",
    },
  ];

  return (
    <main className="flex flex-col row-start-2 items-center">
      <Image
        className="rounded-full my-8"
        src="/images/logo.jpg"
        alt={title}
        width={256}
        height={256}
      />

      <div className="max-w-screen-lg text-center space-y-2 my-8">
        <h1 className="text-6xl">{title}</h1>
        <h2 className="text-4xl">{subTitle}</h2>
        <h2 className="text-2xl">{start}</h2>
      </div>

      <Link
        className="mb-8"
        href="mailto:mariafilippinilazzari@gmail.com"
        target="_blank"
      >
        <Button>
          <Mail /> Scrivimi
        </Button>
      </Link>

      <div className="my-8 flex justify-center items-center gap-24 flex-wrap container">
        {cards.map(card => (
          <CardImage key={card.title} {...card} href="/works" />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
