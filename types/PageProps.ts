import { Params } from "./Params";

export type PageProps<
  TParams extends Params,
  TSearch extends Params
> = Readonly<{
  params: Promise<TParams>;
  searchParams: Promise<TSearch>;
}>;
