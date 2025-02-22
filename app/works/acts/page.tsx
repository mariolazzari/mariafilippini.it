import { Works } from "@/components/Works";
import { acts } from "@/data/acts";
import { WorksPageProps } from "@/types/WorksPageProps";
import { Clapperboard } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atti unici",
  alternates: {
    canonical: "/works/acts",
  },
};

async function ActsPage({ searchParams }: WorksPageProps) {
  const { search = "" } = await searchParams;

  return (
    <Works
      icon={<Clapperboard className="mx-auto" size={48} />}
      title="Atti unici divertenti e farse"
      works={acts}
      search={search}
      href="/works/acts"
    />
  );
}

export default ActsPage;
