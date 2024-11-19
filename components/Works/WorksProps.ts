import { Work } from "@/types/Work";
import { ReactNode } from "react";

export type WorksProps = {
  icon: ReactNode;
  title: string;
  works: Work[];
  search: string;
  href: string;
};
