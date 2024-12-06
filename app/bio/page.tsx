import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Biografia",
  alternates: {
    canonical: "/bio",
  },
};

function BioPage() {
  return (
    <div className="mx-auto p-8 max-w-5xl bg-secondary rounded-xl">
      <h2 className="mt-10 text-3xl font-semibold border-b pb-2">Biografia</h2>

      <p className="text-justify my-4">
        <span className="font-semibold">Maria Filippini</span> nasce a
        <a
          className="mx-1 hover:underline"
          href="https://it.wikipedia.org/wiki/Comezzano-Cizzago"
          target="_blank"
        >
          Comezzano-Cizzago
        </a>
        (Bs) nel 1947. Dopo la laurea in pedagogia, conseguita presso l’
        <a href="https://brescia.unicatt.it/">Università Cattolica</a>Università
        Cattolica di Brescia, si dedica all’insegnamento. Inizia a scrivere
        commedie in dialetto bresciano nel 1997, casualmente, per soddisfare la
        richiesta di un testo da parte della filodrammatica locale. Nasce così
        <span className="font-bold ml-1">”Èl murùs terù”</span>, commedia
        destinata ad incontrare tanto favore presso il pubblico da essere
        portata in scena ininterrottamente dal 1997 al 2004 da più compagnie
        contemporaneamente. Dal 1997 ad oggi il numero delle filodrammatiche è
        andato via via aumentando fino al centinaio. I testi sono più di
        centocinquanta tradotti anche in cremonese, bergamasco, mantovano,
        trentino, genovese … Comprendono commedie, drammi, monologhi, racconti,
        sketch per spettacoli di cabaret, poesie, recite scolastiche e per
        anziani. L’autrice ha scritto testi per l’importante rassegna“Natale
        nelle pievi”, per la regia di Pietro Arrigoni. Per lo stesso regista ha
        tradotto in francese le poesie del Canossi inserite nello spettacolo
        <span className="font-bold ml-1">“Carta, penna, calamaio”</span>. Come
        autrice più rappresentata nei teatri bresciani è stata testimonial della
        VII Edizione del prestigioso{" "}
        <span className="font-bold mx-1">“Gran Premio Leonessa d’oro”</span>
        nell’anno 2007. Nell’anno 2012 ha collaborato con la Vigilanza Urbana di
        Brescia per la prevenzione delle truffe agli anziani col testo
        <span className="font-bold ml-1">
          ”G’ho ‘ncontràt la volp e ‘l gat”
        </span>
        , rappresentato dagli stessi vigili urbani nelle cinque circoscrizioni
        della città. Le vicende narrate nelle commedie prendono il via da fatti
        della vita quotidiana e si aggrovigliano tra equivoci e colpi di scena,
        per dipanarsi in un’inaspettata soluzione finale. Il linguaggio è
        semplice e pulito, ma aggredisce con graffiante ironia i feticci della
        società moderna: denaro, successo, potere.
      </p>

      <h2 className="mt-10 border-b pb-2 text-3xl font-semibold">
        Testi pubblicati
      </h2>

      <div className="flex gap-4 p-4 flex-wrap justify-between items-center">
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2 md:w-1/2">
          <li>
            <span className="font-bold mr-1">Èl miràcol de Nedàl</span>
            (Massetti-Rodella Editore)
          </li>
          <li>
            <span className="font-bold mr-1">Vésse e giödésse</span>
            (Massetti-Rodella Editore)
          </li>
          <li>
            <span className="font-bold mr-1">C&apos;era una volta</span>{" "}
            (Cooperativa Serena di Lograto)
          </li>
          <li>
            in: <span className="font-bold mr-1">C&apos;era una volta</span>
            (Cooperativa Serena di Lograto)
          </li>
          <li>
            in: <span className="font-bold mr-1">“Natale nelle Pievi”</span>{" "}
            anni 2006/07/08/09 (Massetti-Rodella Editore)
          </li>
        </ul>

        <Image
          src="/images/miracol.jpg"
          alt="miracol"
          width={200}
          height={300}
        />

        <Image src="/images/vesse.jpg" alt="vesse" width={200} height={300} />
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Da tre anni l’autrice collabora con la{" "}
        <span className="font-bold mx-1">Fondazione Don Primo Mazzolari</span>
        scrivendo sceneggiature tratte dalle sue opere, quali{" "}
        <span className="font-bold ml-1">“La più bella avventura“</span>,
        <span className="font-bold mx-1">“Diario di una Primavera”</span> e{" "}
        <span className="font-bold ml-1">“Il Samaritano“</span>. Gli spettacoli,
        allestiti dal gruppo teatrale di Beppe Pasotti, sono messi in scena
        nelle chiese. Da ricordare la rappresentazione di{" "}
        <span className="font-bold mx-1">“Confiteor”</span> in Duomo Vecchio a
        Brescia del 26 aprile 2014, che ha riscosso quindici minuti di applausi
        con tutto esaurito.
      </p>
    </div>
  );
}

export default BioPage;
