import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), reactRefresh()],
	build: {
		outDir: "dist",
		assetsDir: "assets",
		sourcemap: false,
		minify: "esbuild",
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		rollupOptions: {
			input: "src/index.js",
		},
	},
});
