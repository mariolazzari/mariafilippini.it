import { Works } from "@/components/Works";
import { WorksPageProps } from "@/types/WorksPageProps";
import { ScrollText } from "lucide-react";
import { themes } from "@/data/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tematiche",
  alternates: {
    canonical: "/works/themes",
  },
};

async function ThemesPage({ searchParams }: WorksPageProps) {
  const { search = "" } = await searchParams;

  return (
    <Works
      icon={<ScrollText className="mx-auto" size={48} />}
      title="Tematiche"
      href="/works/themes"
      works={themes}
      search={search}
    />
  );
}

export default ThemesPage;
