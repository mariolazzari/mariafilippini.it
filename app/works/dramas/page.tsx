import { Works } from "@/components/Works";
import { WorksPageProps } from "@/types/WorksPageProps";
import { Drama } from "lucide-react";
import { dramas } from "@/data/dramas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drammi",
};

async function DramasPage({ searchParams }: WorksPageProps) {
  const { search = "" } = await searchParams;

  return (
    <Works
      icon={<Drama className="mx-auto" size={48} />}
      title="Drammi"
      href="/works/dramas"
      search={search}
      works={dramas}
    />
  );
}

export default DramasPage;
