import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Static Vite deployment config for Vercel.
// This avoids the Lovable/TanStack Start Nitro SSR wrapper that was producing Vercel 404s.
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  build: {
    outDir: "dist",
  },
});
