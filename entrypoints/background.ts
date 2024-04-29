import { browser } from "wxt/browser";
import { $t } from "@/shared/utils.ts";



export default defineBackground(() => {
    // Setup context
    browser.contextMenus?.create({
        id: browser.runtime.id,
        type: 'normal',
        title: $t("extName"),
        contexts: [],
    }, () => {
        browser.runtime.lastError;
    });
});