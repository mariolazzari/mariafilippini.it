import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// merge classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// error handler
export const errorHandler = (ex: unknown) =>
  ex instanceof Error ? ex.message : JSON.stringify(ex);
