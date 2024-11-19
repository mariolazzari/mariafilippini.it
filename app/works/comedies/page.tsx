import { SearchInput } from "@/components/SearchInput";
import { Work } from "@/components/Work";
import { comedies } from "@/data/comedies";
import { filterWorks } from "@/lib/texts";
import { PageProps } from "@/types/PageProps";
import { PartyPopper } from "lucide-react";

async function ComediesPage({
  searchParams,
}: PageProps<{}, { search: string }>) {
  const { search = "" } = await searchParams;

  return (
    <div className="flex flex-col items-center gap-8">
      <PartyPopper className="mx-auto" size={48} />

      <h2 className="text-4xl text-center">Commedie</h2>
      <SearchInput href="/works/comedies" />

      <div className="flex justify-center items-center gap-16 flex-wrap">
        {filterWorks(comedies, search).map(act => (
          <Work key={act.title} work={act} />
        ))}
      </div>
    </div>
  );
}

export default ComediesPage;
