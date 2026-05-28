import { Anchor } from "@/types/Anchor";
import { Home, User2, Book, Calendar, Link } from "lucide-react";

export const routes = [
  "/",
  "/bio",
  "/works",
  "/works/acts",
  "/works/comedies",
  "/works/dramas",
  "/works/schools",
  "/works/themes",
  "/works/texts",
  "/events",
  "/contacts",
];

export const links: Anchor[] = [
  { label: "Home", href: "/", icon: <Home size={20} /> },
  { label: "Biografia", href: "/bio", icon: <User2 size={20} /> },
  { label: "Opere", href: "/works", icon: <Book size={20} /> },
  { label: "Eventi", href: "/events", icon: <Calendar size={20} /> },
  { label: "Contatti", href: "/contacts", icon: <Link size={20} /> },
];
