import { Result } from "@/types/Result";
import { errorHandler } from "./utils";
import { FetchDataOptions } from "@/types/FetchDataOptions";

const baseUrl = "http://localhost:4002/api";

async function fetchData<TBody = undefined>(opts: FetchDataOptions<TBody>) {
  // check if url contains '/'
  const url = opts.url.startsWith("/")
    ? `${baseUrl}${opts.url}`
    : `${baseUrl}/${opts.url}`;

  // build headers
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (opts.token) {
    headers["Authorization"] = `Bearer ${opts.token}`;
  }

  // check body
  const { method } = opts;
  const body =
    method === "PATCH" || method === "PUT" || method === "POST"
      ? JSON.stringify(opts.body)
      : null;

  // api call
  const res = await fetch(url, { method, body, headers });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

async function exec<TRes, TBody>(
  opts: FetchDataOptions<TBody>
): Promise<Result<TRes>> {
  try {
    const data: TRes = await fetchData<TBody>(opts);
    return {
      success: true,
      data,
    };
  } catch (ex) {
    return {
      success: false,
      error: errorHandler(ex),
    };
  }
}

export async function getData<TRes>(
  url: string,
  token?: string
): Promise<Result<TRes>> {
  return exec({ url, token, method: "GET" });
}

export async function postData<TRes, TBody>(
  url: string,
  body: TBody,
  token?: string
): Promise<Result<TRes>> {
  return exec<TRes, TBody>({ url, token, method: "POST", body });
}

export async function putData<TRes, TBody>(
  url: string,
  body: TBody,
  token?: string
): Promise<Result<TRes>> {
  return exec<TRes, TBody>({ url, token, method: "PUT", body });
}

export async function patchData<TRes, TBody>(
  url: string,
  body: TBody,
  token?: string
): Promise<Result<TRes>> {
  return exec({ url, token, method: "PATCH", body });
}

export async function deleteData<TRes>(
  url: string,
  token?: string
): Promise<Result<TRes>> {
  try {
    const data: TRes = await fetchData({ url, token, method: "DELETE" });
    return {
      success: true,
      data,
    };
  } catch (ex) {
    return {
      success: false,
      error: errorHandler(ex),
    };
  }
}
