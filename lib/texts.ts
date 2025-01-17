import { Work } from "@/types/Work";

export const title = "Maria Filippini Lazzari";
export const subTitle = "Autrice teatrale bresciana";
export const start = "Su il sipario!";

export const description =
  "Maria Filippini Lazzari sito ufficiale scrittrice dialettale bresciana";

export const bio =
  "Maria Filippini nasce a Comezzano-Cizzago (Bs) nel 1947. Dopo la laurea in pedagogia, conseguita presso l’Università Cattolica di Brescia, si dedica all’insegnamento. Inizia a scrivere commedie in dialetto bresciano nel 1997, casualmente, per soddisfare la richiesta di un testo da parte della filodrammatica locale. Nasce così ”Èl murùs terù”, commedia destinata ad incontrare tanto favore presso il pubblico da essere portata in scena ininterrottamente dal 1997 al 2004 da più compagnie contemporaneamente. Dal 1997 ad oggi il numero delle filodrammatiche è andato via via aumentando fino al centinaio. I testi sono più di centocinquanta tradotti anche in cremonese, bergamasco, mantovano, trentino, genovese … Comprendono commedie, drammi, monologhi, racconti, sketch per spettacoli di cabaret, poesie, recite scolastiche e per anziani. L’autrice ha scritto testi per l’importante rassegna“Natale nelle pievi”, per la regia di Pietro Arrigoni. Per lo stesso regista ha tradotto in francese le poesie del Canossi inserite nello spettacolo “Carta, penna, calamaio”. Come autrice più rappresentata nei teatri bresciani è stata testimonial della VII Edizione del prestigioso “Gran Premio Leonessa d’oro”nell’anno 2007. Nell’anno 2012 ha collaborato con la Vigilanza Urbana di Brescia per la prevenzione delle truffe agli anziani col testo”G’ho ‘ncontràt la volp e ‘l gat”, rappresentato dagli stessi vigili urbani nelle cinque circoscrizioni della città. Le vicende narrate nelle commedie prendono il via da fatti della vita quotidiana e si aggrovigliano tra equivoci e colpi di scena, per dipanarsi in un’inaspettata soluzione finale. Il linguaggio è semplice e pulito, ma aggredisce con graffiante ironia i feticci della società moderna: denaro, successo, potere.";

export function filterWorks(works: Work[], search: string) {
  return works.filter(
    work =>
      work.title.toLowerCase().includes(search) ||
      work.titleDia?.includes(search) ||
      work.subject?.includes(search)
  );
}
