export type FetchDataOptions<TBody> = (
  | {
      method: "GET" | "DELETE";
    }
  | {
      method: "PUT" | "PATCH" | "POST";
      body: TBody;
    }
) & {
  url: string;
  token?: string;
};
