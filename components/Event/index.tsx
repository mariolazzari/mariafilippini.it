import { formatDate } from "@/lib/dates";
import { EventProps } from "./EventProps";

export function Event({ title, company, date, place }: EventProps) {
  return (
    <div className="border border-1 p-4 rounded-lg w-[300px]">
      <h2 className="text-xl text-center mb-4">{title}</h2>
      <h3 className="text-lg">{company}</h3>
      <h4 className="text-md">{place}</h4>
      <h4 className="text-md">{formatDate(date)}</h4>
    </div>
  );
}
