export type Work = {
  title: string;
} & Partial<{
  titleDia: string;
  genre: string;
  duration: string;
  scene: string;
  actors: string;
  subject: string;
  plot: string;
  meaning: string;
  remarks: string;
}>;
