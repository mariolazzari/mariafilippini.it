import { Works } from "@/components/Works";
import { texts } from "@/data/texts";
import { WorksPageProps } from "@/types/WorksPageProps";
import { Book } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testi",
  alternates: {
    canonical: "/works/texts",
  },
};

async function TextsPage({ searchParams }: WorksPageProps) {
  const { search = "" } = await searchParams;

  return (
    <Works
      icon={<Book className="mx-auto" size={48} />}
      title="Testi"
      works={texts}
      href="/works/texts"
      search={search}
    />
  );
}

export default TextsPage;
