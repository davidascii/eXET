import { resolve } from "path";
import {build, createFilter, defineConfig, optimizeDeps, ViteDevServer} from "vite";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import fs from 'fs/promises';
import tailwindcss from 'tailwindcss';

const root = resolve(__dirname, "pages");
const outDir = resolve(__dirname, "../../../dist");


// GUN for VITE needings
const moduleExclude = (match: any) => {
    const m = (id: any) => id.indexOf(match) > -1
    return {
        name: `exclude-${match}`,
        resolveId(id: any) {
            if (m(id)) return id
        },
        load(id: any) {
            if (m(id)) return `export default {}`
        },
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    root,
    plugins: [react(),
        moduleExclude('text-encoding'),
    ],

    define: {
        global: 'window',
    },

    resolve: {
        alias: {
            "react-native": "react-native-web",
            'react-native-safe-area-context': 'expo-dev-menu/vendored/react-native-safe-area-context/src',
        },
    },
    // css: {
    //     postcss: {
    //         plugins: [tailwindcss]
    //     }
    // },

    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, "index.html"),
                home: resolve(root, "home", "index.html"),
                login: resolve(root, "login", "index.html"),
            },
        },
    },

    optimizeDeps: {
        // TODO REMOVER OU ARRUMAR DEPOIS
        include: [
            'gun',
            'gun/gun',
            'gun/sea',
            'gun/sea.js',
            'gun/lib/then',
            'gun/lib/webrtc',
            'gun/lib/radix',
            'gun/lib/radisk',
            'gun/lib/store',
            'gun/lib/rindexed',
        ],
        esbuildOptions : {
            resolveExtensions: [
                '.web.js',
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
            ],
            plugins: [
                {
                    name: 'load-rnvi-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            { filter: /node_modules\\react-native-vector-icons\\.*\.js$/ },
                            async (args) => ({
                                loader: 'jsx',
                                contents: await fs.readFile(args.path, 'utf8'),
                            })
                        );
                    },
                }
            ]
        }
    }
});
