import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import netlify from "@astrojs/netlify";
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    site: 'https://placeholder.netlify.app',
    integrations: [mdx(), sitemap(), tailwind()],
    output: 'static',
    adapter: netlify(),
    markdown: {
        shikiConfig: {
          themes: {
            light: 'poimandres',
            dark: 'catppuccin-latte',
          },
        },
      },
    
})
