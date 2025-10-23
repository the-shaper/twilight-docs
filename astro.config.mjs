// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "TWILIGHT DOCS", // Update to your site name
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/your-org/twilight-docs", // Update to your repo
        },
        // Add more social if needed
      ],
      customCss: [
        // Relative path per docs for overrides (global.css auto-injected by Astro)
        "./src/fonts/font-face.css",
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Anything You Want",
          autogenerate: { directory: "AYW" },
        },
      ],
    }),
  ],
  // vite block removed (empty after Tailwind removal)
});
