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
  },
});
