import { g as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_FMvgkE07.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"name":"Portrait of Bilbo","medium":"Oil painting","dimensions":"15x15 cm","year":2025,"month":6,"heroImage":"/bilbo.jpg","author":"Mago Arsaev","text":"Bilbo is my 5 year old cat, this a portrait of him i did on 15x15 cm gessoed HDF panel in oil paint."};
				const file = "E:/Desktop/artist website/art-void/src/content/art/bilbo-oil-15x15-hdf.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
