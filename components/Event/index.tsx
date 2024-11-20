import { formatDate } from "@/lib/dates";
import { EventProps } from "./EventProps";
import {
  PartyPopper,
  Drama,
  Clapperboard,
  Book,
  GraduationCap,
  ScrollText,
} from "lucide-react";

const ICON_SIZE = 48;

export function Event({ event }: EventProps) {
  const { title, company, place, date, genre } = event;

  const renderIcon = () => {
    switch (genre) {
      case "Act":
        return <Clapperboard className="mx-auto" size={ICON_SIZE} />;

      case "Book":
        return <Book className="mx-auto" size={ICON_SIZE} />;

      case "Drama":
        return <Drama className="mx-auto" size={ICON_SIZE} />;

      case "School":
        return <GraduationCap className="mx-auto" size={ICON_SIZE} />;

      case "Theme":
        return <ScrollText className="mx-auto" size={ICON_SIZE} />;

      default:
        return <PartyPopper className="mx-auto" size={ICON_SIZE} />;
    }
  };

  return (
    <div className="border border-muted p-4 rounded-lg w-[350px] h-[350px] bg-gradient-to-br from-background to-muted">
      <div className="w-full">{renderIcon()}</div>
      <h2 className="text-xl text-center my-4 h-[75px]">{title}</h2>
      <h3>{company}</h3>
      <h4>{place}</h4>
      <h4>{formatDate(date)}</h4>
    </div>
  );
}
