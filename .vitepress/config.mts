import { defineConfig } from "vitepress";
import inkline from "@inkline/plugin/vite";
import type { UserOptions } from "@inkline/plugin";

const inklineConfig: UserOptions = {
  outputDir: ".vitepress/theme/inkline-variables",
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jess Champion - Software Developer",
  description:
    "Jess Champion's portfolio. New Zealand based Software developer, web developer, UX and design.",
  srcDir: "./src",
  head: [
    [
      "script",
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5PB7PZ29');`,
    ],
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
  sitemap: {
    hostname: "https://jesschampion.co.nz",
  },
});
