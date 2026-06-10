<<<<<<< HEAD
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
=======
// Lovable exports this app as a TanStack Start project.
// Outside Lovable, the @lovable.dev/vite-tanstack-config package does NOT enable
// the Nitro deployment bundle unless it is explicitly configured.
// Vercel needs the Nitro Vercel preset so the build creates deployable output.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "vercel",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
>>>>>>> 2f74525afffcc44d0abcf01ec1f371622f80d411
  },
});
