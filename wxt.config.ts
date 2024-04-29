import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';
import Unocss from "unocss/vite";
import tailwindcss from "tailwindcss";
import postcssPresetMantine from "postcss-preset-mantine";
import postcssSimpleVars from "postcss-simple-vars";
// vite.config.js
// See https://wxt.dev/api/config.html
export default defineConfig({
    dev: {
        reloadCommand: 'Alt+T',
    },
    manifest: {
        name: '__MSG_extName__',
        description: '__MSG_extDescription__',
        default_locale: 'en',
        permissions: ['storage', "contextMenus", 'webRequest', "sidePanel"],
        commands: {
        },
        action: {
            "default_title": "Click to open sidebar"
        }
    },
    vite: () => ({
        plugins: [
            react(),
            Unocss({}),
        ],

        css: {
            postcss: {
                plugins: [
                    tailwindcss,
                    postcssPresetMantine,
                    postcssSimpleVars({
                        variables: {
                            'mantine-breakpoint-xs': '36em',
                            'mantine-breakpoint-sm': '48em',
                            'mantine-breakpoint-md': '62em',
                            'mantine-breakpoint-lg': '75em',
                            'mantine-breakpoint-xl': '88em',
                        },
                    }),
                ]
            }
        }
    }),

});
