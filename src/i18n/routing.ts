import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["sr", "en"],
  defaultLocale: "sr",
  pathnames: {
    "/": "/",
    "/pocetna": "/pocetna",
    "/o-nama": "/o-nama",
    "/proizvodi": "/proizvodi",
    "/recepti": "/recepti",
    "/novosti": "/novosti",
    "/kontakt": "/kontakt",
  },
});
