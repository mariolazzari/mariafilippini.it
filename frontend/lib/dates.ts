import { format } from "date-fns";
import { it } from "date-fns/locale";

export const formatDate = (date: Date) =>
  format(date, "eeee dd MMMM - HH:mm", { locale: it });
