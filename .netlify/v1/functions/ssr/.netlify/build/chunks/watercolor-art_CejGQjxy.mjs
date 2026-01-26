import { g as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_FMvgkE07.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"name":"Female figure watercolor study","medium":"Watercolor","dimensions":"A4","year":2025,"month":2,"heroImage":"/scan2.png","author":"Mago Arsaev","status":"Sold","text":"Small water color study of figure i did from life"};
				const file = "E:/Desktop/artist website/art-void/src/content/art/watercolor-art.md";
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
