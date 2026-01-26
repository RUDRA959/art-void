/* empty css                                 */
import { g as createComponent, j as renderComponent, k as renderHead, i as addAttribute, r as renderTemplate } from '../chunks/astro/server_FMvgkE07.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_BAlKOI4R.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_DQYmdOMY.mjs';
import { g as getCollection } from '../chunks/_astro_content_CZ-Qe78p.mjs';
import { f as fetchArtworks, u as urlFor, $ as $$ArtGallery } from '../chunks/sanity_BAmLsbN8.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
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
  function slugify(str) {
    return str ? str.toLowerCase().replace(/\s+/g, "-") : "";
  }
  const selectedMedium = "All";
  const mediums = Array.from(new Set(allArtworks.map((a) => a.data.medium).filter(Boolean)));
  mediums.unshift("All");
  allArtworks.sort((a, b) => {
    if (a.data.year !== b.data.year) return b.data.year - a.data.year;
    return b.data.month - a.data.month;
  });
  allArtworks.splice(20);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="w-full max-w-screen-md mx-auto my-4 dark:bg-neutral-800 dark:text-neutral-300 transition-colors duration-300"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex flex-col justify-center"> <!-- Hero Section --> <section class="min-h-screen flex flex-col items-center px-4 md:px-0 py-0"> <div class="w-full max-w-2xl mx-auto flex flex-col gap-8 items-center text-center"> <div class="space-y-4"> <h1 class="text-5xl md:text-7xl font-bold leading-tight">
Creative <span class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Artistry</span> </h1> <p class="text-xl md:text-2xl text-gray-700 dark:text-neutral-300">
Exploring visual expression through unique and compelling artwork
</p> </div> <p class="text-base md:text-lg text-gray-600 dark:text-neutral-400 leading-relaxed max-w-xl">
Welcome to my creative portfolio. Discover a curated collection of artwork spanning multiple mediums and styles. Each piece tells a story, reflecting my artistic journey and passion for visual storytelling.
</p> <a href="/art" class="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
Explore My Work
</a> </div> </section> <!-- Featured Image --> <div class="w-full flex flex-col items-center gap-2.5 px-4 lg:px-0 mt-6 mb-16"> <img src="/placeholder-about.jpg" alt="Featured artwork" class="rounded-lg shadow-lg w-full max-w-2xl"> <p class="italic text-xs text-gray-600 dark:text-neutral-400">
Artist
</p> </div> <!-- Gallery Section --> <div class="px-4 md:px-0 mt-10"> <section class="mb-8"> <h2 class="text-3xl font-bold mb-4">Most recent art</h2> <ul class="grid grid-cols-2 md:grid-cols-4 gap-4"> ${mediums.map((m) => renderTemplate`<li> <a${addAttribute(slugify(m) === "all" ? "/art" : `/art/${slugify(m)}`, "href")}${addAttribute(`block p-3 rounded bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 transition${selectedMedium === m ? " ring-2 ring-blue-500" : ""}`, "class")}> ${m} </a> </li>`)} </ul> </section> ${renderComponent($$result, "ArtGallery", $$ArtGallery, { "artItems": allArtworks })} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "E:/Desktop/artist website/art-void/src/pages/index.astro", void 0);

const $$file = "E:/Desktop/artist website/art-void/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
