import { nxCopyAssetsPlugin } from "@nx/vite/plugins/nx-copy-assets.plugin";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: "../../../node_modules/.vite/apps/relay/api",
  plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(["*.md"])],
  test: {
    name: "relay-api",
    watch: false,
    globals: true,
    environment: "node",
    include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    passWithNoTests: true,
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../../coverage/apps/relay/api",
      provider: "v8" as const,
    },
  },
}));
