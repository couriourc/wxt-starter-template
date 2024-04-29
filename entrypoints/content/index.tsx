import { getSettings } from "@/shared/config";

export default defineContentScript({
    matches: ['<all_urls>'],
    runAt: "document_end",
    cssInjectionMode: "ui",
    world: "ISOLATED",
    async main(e) {
        const settings = await getSettings();

        /*@REMEMBER ME*/
    },

});

