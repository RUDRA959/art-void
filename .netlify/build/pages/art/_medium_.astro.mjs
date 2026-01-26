/* empty css                                    */
import { f as createAstro, g as createComponent, j as renderComponent, k as renderHead, i as addAttribute, r as renderTemplate } from '../../chunks/astro/server_FMvgkE07.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../chunks/Footer_BAlKOI4R.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CZ-Qe78p.mjs';
import { f as fetchArtworks, u as urlFor, $ as $$ArtGallery } from '../../chunks/sanity_BAmLsbN8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://placeholder.netlify.app");
const prerender = false;
const $$medium = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$medium;
  function slugify(str) {
    return str ? str.toLowerCase().replace(/\s+/g, "-") : "";
  }
  const { medium } = Astro2.params;
  const artItems = await getCollection("art");
  const sanityArtworks = await fetchArtworks();
  const transformedSanityArtworks = sanityArtworks.map((art) => ({
    data: {
      name: art.title,
      heroImage: art.image ? urlFor(art.image).url() : "",
      medium: art.medium || "Mixed Media",
      year: art.year || (/* @__PURE__ */ new Date()).getFullYear(),
      month: art.month || (/* @__PURE__ */ new Date()).getMonth() + 1,
      dimensions: art.dimensions || "",
      text: art.description || ""
    }
  }));
  const allArtworks = [...artItems, ...transformedSanityArtworks];
  const mediums = Array.from(new Set(allArtworks.map((a) => a.data.medium).filter(Boolean)));
  mediums.unshift("All");
  const selectedMedium = allArtworks.find((a) => slugify(a.data.medium) === medium)?.data.medium || "All";
  const filteredArt = selectedMedium === "All" ? allArtworks : allArtworks.filter(
    (a) => a.data.medium && slugify(a.data.medium) === medium
  );
  filteredArt.sort((a, b) => {
    if (a.data.year !== b.data.year) return b.data.year - a.data.year;
    return b.data.month - a.data.month;
  });
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Artist Name Art | Gallery", "description": "Browse original works by a London-based artist across oil, watercolor, line, and more." })}${renderHead()}</head> <body class="w-full max-w-screen-md mx-auto my-4 dark:bg-neutral-800 dark:text-neutral-300 transition-colors duration-300"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex flex-col gap-8 px-4 md:px-0"> <section class="mb-8"> <h1 class="text-3xl font-bold mb-4">Art Categories</h1> <ul class="grid grid-cols-2 md:grid-cols-4 gap-4"> ${mediums.map((m) => renderTemplate`<li> <a${addAttribute(slugify(m) === "all" ? "/art" : `/art/${slugify(m)}`, "href")}${addAttribute(`block p-3 rounded bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 transition${selectedMedium === m ? " ring-2 ring-blue-500" : ""}`, "class")}> ${m} </a> </li>`)} </ul> </section> ${renderComponent($$result, "ArtGallery", $$ArtGallery, { "artItems": filteredArt })} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "E:/Desktop/artist website/art-void/src/pages/art/[medium].astro", void 0);

const $$file = "E:/Desktop/artist website/art-void/src/pages/art/[medium].astro";
const $$url = "/art/[medium]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$medium,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
