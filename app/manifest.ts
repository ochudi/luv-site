import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Life Upside View — Mental Health Foundation",
    short_name: "Life Upside View",
    description:
      "Real stories, evidence-informed tools, and pathways to mental health support.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F4EF",
    theme_color: "#1A1A1A",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
