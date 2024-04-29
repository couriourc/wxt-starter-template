import {defineConfig} from 'vitest/config';
import {WxtVitest} from "wxt/testing";

export default defineConfig({
    test: {
        environment: './vitest-environment-puppeteer.ts',
    },
    // Configure test behavior however you like
    // This is the line that matters!

});
