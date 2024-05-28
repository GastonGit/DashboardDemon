import requestHelper from "../../util/requestHelper";
import { oauthDeviceResponseSchema } from "./model";

const CLIENT_ID = "e5ywbuhysl04k1snsnb8vznxr9cdh5";

export async function getTwitchVerificationUri() {
  const formData = new URLSearchParams();
  formData.append("client_id", CLIENT_ID);
  formData.append("scopes", "user:read:email");

  const response = await requestHelper(
    "POST",
    "https://id.twitch.tv/oauth2/device",
    formData,
    oauthDeviceResponseSchema
  );

  return response.verification_uri;
}
