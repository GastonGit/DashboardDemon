import { z, ZodSchema } from "zod";

export default async function requestHelper<T extends ZodSchema>(
  method: "POST",
  url: string,
  body: URLSearchParams | null | undefined,
  schema: T
): Promise<Awaited<z.TypeOf<T>>> {
  const response = await fetch(url, {
    method,
    body,
  });
  if (!response.ok) {
    throw new Error(`Request failed`);
  }

  const result = await response.json();

  return schema.parse(result);
}
