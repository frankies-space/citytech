import type { MetadataRoute } from "next";

const baseUrl = "https://citytech.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/elektrotechniek",
    "/mw-batterijen",
    "/laadpalen",
    "/over-ons",
    "/contact",
    "/projecten",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
