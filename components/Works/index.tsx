import { SearchInput } from "@/components/SearchInput";
import { Work } from "@/components/Work";
import { filterWorks } from "@/lib/texts";
import { WorksProps } from "./WorksProps";

export function Works({ icon, title, works, search, href }: WorksProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      {icon}

      <h2 className="text-4xl text-center">{title}</h2>
      <SearchInput href={href} />

      <div className="flex justify-center items-center gap-16 flex-wrap">
        {filterWorks(works, search).map(work => (
          <Work key={work.title} work={work} />
        ))}
      </div>
    </div>
  );
}
