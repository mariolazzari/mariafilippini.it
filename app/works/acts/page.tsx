import { Works } from "@/components/Works";
import { acts } from "@/data/acts";
import { PageProps } from "@/types/PageProps";
import { Clapperboard } from "lucide-react";

type Props = PageProps<{}, { search: string }>;

async function ActsPage({ searchParams }: Props) {
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
