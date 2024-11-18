import { SearchInput } from "@/components/SearchInput";
import { Work } from "@/components/Work";
import { acts } from "@/data/acts";
import { filterWorks } from "@/lib/texts";
import { PageProps } from "@/types/PageProps";
import { Clapperboard, Divide } from "lucide-react";

async function ActsPage({ searchParams }: PageProps<{}, { search: string }>) {
  const { search = "" } = await searchParams;

  return (
    <div className="flex flex-col items-center gap-8">
      <Clapperboard className="mx-auto" size={48} />

      <h2 className="text-4xl text-center">Atti unici divertenti e farse</h2>
      <SearchInput />

      <div className="flex justify-center items-center gap-16 flex-wrap">
        {filterWorks(acts, search).map(act => (
          <Work key={act.title} work={act} />
        ))}
      </div>
    </div>
  );
}

export default ActsPage;
