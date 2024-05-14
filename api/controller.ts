import { ValueOf } from "next/dist/shared/lib/constants";
import axios from "axios";

import { commands, externalSiloses, propertyNames } from "@/config";
import { assertIsDefined, parseSiloNumber } from "@/utils";
import { ApiState } from "./types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getState(): Promise<ApiState> {
  assertIsDefined(apiUrl);
  const response = await axios.get(apiUrl);

  return response.data;
}

export async function toggleFeedMode(
  silo: ValueOf<typeof externalSiloses>,
): Promise<ApiState> {
  assertIsDefined(apiUrl);
  const response = await axios.post(`${apiUrl}/command`, {
    c: commands.toggleFeedMode,
    [propertyNames.externalSilo]: parseSiloNumber(silo),
  });

  return response.data;
}
