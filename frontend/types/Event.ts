import { Genre } from "./Genre";

export type Event = {
  title: string;
  company: string;
  place: string;
  date: Date;
  genre: Genre;
};
