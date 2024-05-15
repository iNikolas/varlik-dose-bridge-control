import { ValueOf } from "next/dist/shared/lib/constants";
import axios from "axios";

import {
  apiRoutes,
  commands,
  externalSiloses,
  propertyNames,
  weightDivider,
} from "@/config";
import { assertIsDefined, parseSiloNumber } from "@/utils";

import { ApiState } from "./types";

assertIsDefined(process.env.NEXT_PUBLIC_TIMEOUT_MS);
assertIsDefined(process.env.NEXT_PUBLIC_API_URL);

const axiosInstance = axios.create({
  timeout: parseInt(process.env.NEXT_PUBLIC_TIMEOUT_MS, 10),
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
export async function getState(): Promise<ApiState> {
  const response = await axiosInstance.get("");

  return response.data;
}

export async function toggleFeedMode(
  silo: ValueOf<typeof externalSiloses>,
): Promise<ApiState> {
  const response = await axiosInstance.post(apiRoutes.command, {
    c: commands.toggleFeedMode,
    [propertyNames.externalSilo]: parseSiloNumber(silo),
  });

  return response.data;
}

export async function setSiloThreshold({
  silo,
  threshold,
}: {
  silo: ValueOf<typeof externalSiloses>;
  threshold: number;
}): Promise<ApiState> {
  const response = await axiosInstance.post(apiRoutes.command, {
    c: commands.setSiloTHreshold,
    [propertyNames.silo]: parseSiloNumber(silo),
    [propertyNames.threshold]: Math.round(threshold * weightDivider),
  });

  return response.data;
}

export async function setPrimarySiloState({
  selectionState202,
  selectionState204,
}: {
  selectionState202: string | null;
  selectionState204: string | null;
}) {
  const response = await axiosInstance.post(apiRoutes.command, {
    c: commands.setPrimarySiloState,
    [propertyNames.selectionState202]: selectionState202
      ? parseSiloNumber(selectionState202)
      : 0,
    [propertyNames.selectionState204]: selectionState204
      ? parseSiloNumber(selectionState204)
      : 0,
  });

  return response.data;
}
