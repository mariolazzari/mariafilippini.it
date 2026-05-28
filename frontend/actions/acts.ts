"use server";

import { getData } from "@/lib/fetcher";
import { Act } from "@/types/Act";
import { Result } from "@/types/Result";

export const getActs = async (): Promise<Result<Act[]>> =>
  await getData<Act[]>("/acts");
