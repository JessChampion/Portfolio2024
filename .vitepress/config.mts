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
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/ico/android-chrome-192x192.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/ico/android-chrome-512x512.png",
      },
    ],
    ["link", { rel: "apple-touch-icon", href: "/ico/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/x-icon", href: "/ico/favicon.ico" }],
    ["link", { rel: "icon", type: "image/png", href: "/ico/favicon.png" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/ico/favicon.svg" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/ico/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/ico/favicon-32x32.png",
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
