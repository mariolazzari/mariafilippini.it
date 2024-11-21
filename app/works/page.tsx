import { CardImage } from "@/components/CardImage";
import { CardImageProps } from "@/components/CardImage/CardImageProps";

function WorksPage() {
  const cards: CardImageProps[] = [
    {
      title: "Atti unici divertenti e farse",
      subtitle: "Opere che non costituiscono spettacolo completo",
      href: "/works/acts",
      imageSrc: "/images/acts.jpg",
    },
    {
      title: "Commedie",
      subtitle: "Opere che costituiscono spettacolo completo",
      href: "/works/comedies",
      imageSrc: "/images/comedies.jpg",
    },
    {
      title: "Drammi",
      subtitle: "Opere drammatiche o di argomento religioso",
      href: "/works/dramas",
      imageSrc: "/images/dramas.jpg",
    },
    {
      title: "Scuole",
      subtitle: "Opere adatte a recitazioni scolastiche",
      href: "/works/schools",
      imageSrc: "/images/schools.jpg",
    },
    {
      title: "Tematiche",
      subtitle:
        "Testi d'occasione: processi alla vecchia, festa della donna...",
      href: "/works/themes",
      imageSrc: "/images/themes.jpg",
    },
    {
      title: "Testi",
      subtitle: "Testi editi e inediti in prosa e poesia",
      href: "/works/texts",
      imageSrc: "/images/texts.jpg",
    },
  ];

  return (
    <div className="mx-auto w-full">
      <h2 className="text-4xl text-center">Opere</h2>

      <p className="max-w-xl text-justify my-16 mx-auto">
        Maria Filippini mette a disposizione delle compagnie teatrali testi in
        dialetto bresciano e in lingua italiana. Il sito riporta una scheda
        illustrativa di ogni singolo copione con titolo, genere, durata, atti,
        scenografia, personaggi, trama, significato. Le opere sono divise in sei
        categorie:
      </p>

      <div className="flex justify-center items-center gap-16 flex-wrap mx-auto container">
        {cards.map(card => (
          <CardImage key={card.href} {...card} />
        ))}
      </div>
    </div>
  );
}

export default WorksPage;
