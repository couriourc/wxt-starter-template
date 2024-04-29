import {defineConfig} from 'vitest/config';
import {WxtVitest} from "wxt/testing";

export default defineConfig({
    test: {
        mockReset: true,
        restoreMocks: true,
    },

    // Configure test behavior however you like
    // This is the line that matters!
    plugins: [WxtVitest()],

});
