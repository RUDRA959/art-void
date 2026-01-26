import { f as createAstro, g as createComponent, m as maybeRenderHead, i as addAttribute, r as renderTemplate } from './astro/server_FMvgkE07.mjs';
import 'kleur/colors';
import 'clsx';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const $$Astro = createAstro("https://placeholder.netlify.app");
const $$ArtGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArtGallery;
  const { artItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="art-gallery"> ${artItems.map((art) => renderTemplate`<div class="relative group flex flex-col"> <div class="w-full aspect-square overflow-hidden rounded shadow-lg"> <img${addAttribute(art.data.heroImage, "src")}${addAttribute(art.data.name, "alt")} class="w-full h-full object-contain cursor-pointer art-image" loading="lazy"${addAttribute(JSON.stringify(art.data), "data-art")}> </div> <div class="mt-2"> <h2 class="text-xl font-semibold">${art.data.name}</h2> <p class="text-sm text-gray-500">${art.data.medium} • ${art.data.year}/${art.data.month}</p> </div> </div>`)} </section> <div id="softbox" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 py-4 md:py-0 hidden"> <div class="bg-white dark:bg-neutral-900 rounded-lg shadow-2xl flex flex-col md:flex-row w-11/12 max-w-5xl" style="height: 70vh; max-height: 90vh;"> <div class="md:w-3/4 w-full p-4 flex items-center justify-center overflow-auto"> <img id="softbox-img" src="" alt="" class="w-auto h-auto object-contain rounded" style="max-height: 100%; max-width: 100%;"> </div> <div class="md:w-1/4 w-full p-6 flex flex-col gap-2 overflow-y-auto"> <button class="self-end text-2xl" id="softbox-close">&times;</button> <h2 class="text-2xl font-bold mb-2" id="softbox-name"></h2> <p><strong>Medium:</strong> <span id="softbox-medium"></span></p> <p><strong>Dimensions:</strong> <span id="softbox-dimensions"></span></p> <p><strong>Date:</strong> <span id="softbox-date"></span></p> <p class="mt-4" id="softbox-text"></p> </div> </div> </div> `;
}, "E:/Desktop/artist website/art-void/src/components/ArtGallery.astro", void 0);

const sanity = createClient({
  projectId: "e26mzpce",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
});
const builder = imageUrlBuilder(sanity);
const urlFor = (source) => builder.image(source);
async function fetchArtworks() {
  const query = `*[_type == "artwork"] | order(year desc, month desc) {
    _id,
    title,
    medium,
    dimensions,
    year,
    month,
    description,
    image
  }`;
  try {
    const artworks = await sanity.fetch(query);
    return artworks || [];
  } catch (error) {
    console.error("Error fetching artworks:", error);
    return [];
  }
}

export { $$ArtGallery as $, fetchArtworks as f, urlFor as u };
