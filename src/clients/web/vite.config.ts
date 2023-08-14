import { resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";

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
        moduleExclude('text-encoding')],

    resolve: {
        alias: {
            "react-native": "react-native-web",
        },
    },
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
        ]
    }
});
