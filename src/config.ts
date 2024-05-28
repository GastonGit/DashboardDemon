import { app } from "electron";

export const isProd = app.isPackaged;
export const isDev = !app.isPackaged;

export const contentSecurityPolicies = [
  `script-src 'self' https://id.twitch.tv https://assets.twitch.tv https://www.twitch.tv ${isDev ? "'unsafe-eval'" : ""}`,
];
