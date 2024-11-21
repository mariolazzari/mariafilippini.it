import { comedies } from "@/data/comedies";
import { PartyPopper } from "lucide-react";
import { Works } from "@/components/Works";
import { WorksPageProps } from "@/types/WorksPageProps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commedie",
};

async function ComediesPage({ searchParams }: WorksPageProps) {
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
