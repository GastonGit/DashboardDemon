import { z } from "zod";

export const oauthDeviceResponseSchema = z.object({
  device_code: z.string(),
  expires_in: z.number(),
  interval: z.number(),
  user_code: z.string(),
  verification_uri: z.string(),
});
