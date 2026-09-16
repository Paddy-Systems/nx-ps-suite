import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: "../../../node_modules/.vite/apps/paddy-systems/web",
  plugins: [react()],
  test: {
    name: "paddy-systems-web",
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["{src,app,pages,specs}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../../coverage/apps/paddy-systems/web",
      provider: "v8" as const,
    },
  },
}));
