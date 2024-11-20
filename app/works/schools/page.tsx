import { Works } from "@/components/Works";
import { WorksPageProps } from "@/types/WorksPageProps";
import { GraduationCap } from "lucide-react";
import { schools } from "@/data/schools";

async function SchoolsPage({ searchParams }: WorksPageProps) {
  const { search = "" } = await searchParams;

  return (
    <Works
      icon={<GraduationCap className="mx-auto" size={48} />}
      title="Scuole"
      href="/works/schools"
      works={schools}
      search={search}
    />
  );
}

export default SchoolsPage;
