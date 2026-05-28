import { IconNode } from "lucide-react";
import { ReactNode } from "react";

export type Anchor = {
  label: string;
  href: string;
} & Partial<{
  icon: ReactNode;
}>;
