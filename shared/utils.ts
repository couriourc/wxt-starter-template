import { browser } from "wxt/browser";
import EN from "@/public/_locales/en/messages.json";

export const $t = (message: keyof typeof EN) => browser.i18n.getMessage(message as any);
export const universalFetch = fetch;
export const pick = (flag: boolean, a: any, b: any) => flag ? a : b;
