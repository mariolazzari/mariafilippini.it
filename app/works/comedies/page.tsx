import { comedies } from "@/data/comedies";
import { PageProps } from "@/types/PageProps";
import { PartyPopper } from "lucide-react";
import { Works } from "@/components/Works";

type Props = PageProps<{}, { search: string }>;

async function ComediesPage({ searchParams }: Props) {
  const { search = "" } = await searchParams;

  return (
    <Works
      icon={<PartyPopper className="mx-auto" size={48} />}
      title="Commedie"
      works={comedies}
      search={search}
      href="/works/comedies"
    />
  );
}

export default ComediesPage;
