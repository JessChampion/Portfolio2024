import { defineConfig } from "vitepress";
import inkline from "@inkline/plugin/vite";
import type { UserOptions } from "@inkline/plugin";

const inklineConfig: UserOptions = {
  outputDir: ".vitepress/theme/inkline-variables",
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "jesschampion",
  description: "Jess Champion's portfolio website",
  srcDir: "./src",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap",
      },
    ],
  ],
  vite: {
    plugins: [inkline(inklineConfig)],
    ssr: {
      noExternal: ["@inkline/inkline"],
    },
  },
});
