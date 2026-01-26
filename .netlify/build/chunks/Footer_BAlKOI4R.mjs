import { f as createAstro, g as createComponent, r as renderTemplate, i as addAttribute, n as defineScriptVars, l as renderSlot, m as maybeRenderHead, s as spreadAttributes, j as renderComponent } from './astro/server_FMvgkE07.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$b = createAstro("https://placeholder.netlify.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><script>\n    const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n  window.localStorage.setItem("theme", theme);\n\n\n  <\/script>'])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"));
}, "E:/Desktop/artist website/art-void/src/components/BaseHead.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$a = createAstro("https://placeholder.netlify.app");
const $$Astronav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      ".astronav-dropdown button, .astronav-dropdown-submenu button, #astronav-menu"\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "E:/Desktop/artist website/art-void/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$9 = createAstro("https://placeholder.netlify.app");
const $$MenuIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu"> ${renderSlot($$result, $$slots["default"], renderTemplate` <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"${spreadAttributes(rest)}> <title>Toggle Menu</title> <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path> <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path> </svg> `)} </button>`;
}, "E:/Desktop/artist website/art-void/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$8 = createAstro("https://placeholder.netlify.app");
const $$OpenIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "E:/Desktop/artist website/art-void/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$7 = createAstro("https://placeholder.netlify.app");
const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "E:/Desktop/artist website/art-void/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$6 = createAstro("https://placeholder.netlify.app");
const $$MenuItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "E:/Desktop/artist website/art-void/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$5 = createAstro("https://placeholder.netlify.app");
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "E:/Desktop/artist website/art-void/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$4 = createAstro("https://placeholder.netlify.app");
const $$DropdownSubmenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "E:/Desktop/artist website/art-void/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$3 = createAstro("https://placeholder.netlify.app");
const $$DropdownItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "E:/Desktop/artist website/art-void/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://placeholder.netlify.app");
const $$StickyHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StickyHeader;
  const {
    scrollY = 100,
    defaultClass = "",
    activeClass = "",
    class: className = "",
    ...rest
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<header", "", "> ", " </header> <script>(function(){", '\nlet scrollPos = 0;\nlet ticking = false;\n\nfunction OnScroll(scrollPos) {\n  const headers = document.querySelectorAll(".astronav-sticky-header");\n  const classArray = activeClass.split(" ");\n  const replaceArray = defaultClass.split(" ");\n\n  headers.forEach((header) => {\n    if (scrollPos > scrollY) {\n      header.classList.remove(...replaceArray);\n      header.classList.add("is-active", ...classArray);\n      header.setAttribute("active", "");\n    }\n    //reduce the scrollY to avoid flickering when scrolling up\n    if (scrollPos < Math.max(scrollY - 40, 10)) {\n      header.classList.remove("is-active", ...classArray);\n      header.classList.add(...replaceArray);\n      header.removeAttribute("active");\n    }\n  });\n}\n\n// Scroll event throttling as per MDN\n// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event\n\ndocument.addEventListener("scroll", (event) => {\n  scrollPos = window.scrollY;\n  if (!ticking) {\n    window.requestAnimationFrame(() => {\n      OnScroll(scrollPos);\n      ticking = false;\n    });\n\n    ticking = true;\n  }\n});\n})();<\/script>'])), maybeRenderHead(), addAttribute(["astronav-sticky-header", className, defaultClass], "class:list"), spreadAttributes(rest), renderSlot($$result, $$slots["default"]), defineScriptVars({ scrollY, defaultClass, activeClass }));
}, "E:/Desktop/artist website/art-void/node_modules/astro-navbar/src/components/StickyHeader.astro", void 0);

const $$Astro$1 = createAstro("https://placeholder.netlify.app");
const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute("switch-theme-button pushable " + props.class, "class")} data-astro-cid-oemx5le4> <span class="shadow" data-astro-cid-oemx5le4></span> <span class="edge" data-astro-cid-oemx5le4></span> <span class="front flex items-center justify-center" data-astro-cid-oemx5le4> <svg class="w-4 h-4 flex dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-oemx5le4> <circle cx="12" cy="12" r="5" data-astro-cid-oemx5le4></circle><line x1="12" y1="1" x2="12" y2="3" data-astro-cid-oemx5le4></line><line x1="12" y1="21" x2="12" y2="23" data-astro-cid-oemx5le4></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-astro-cid-oemx5le4></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-astro-cid-oemx5le4></line><line x1="1" y1="12" x2="3" y2="12" data-astro-cid-oemx5le4></line><line x1="21" y1="12" x2="23" y2="12" data-astro-cid-oemx5le4></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-astro-cid-oemx5le4></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-astro-cid-oemx5le4></line> </svg> <svg class="w-4 h-4 dark:flex hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-oemx5le4> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-oemx5le4></path> </svg> </span> </button> `;
}, "E:/Desktop/artist website/art-void/src/components/ThemeIcon.astro", void 0);

const $$Astro = createAstro("https://placeholder.netlify.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="lg:flex py-4 pt-2 px-4 sm:px-6 xl:px-0 md:pt-10 gap-5 mb-10 lg:mb-28 w-full"> ${renderComponent($$result, "Astronav", $$Astronav, {}, { "default": ($$result2) => renderTemplate` <div class="flex w-full justify-between items-end border-b lg:border-none pb-4 lg:pb-0"> <a class="font-semibold text-xl flex gap-2 items-center group" href="/">Artist</a> <div class="lg:hidden flex items-center justify-center gap-4"> ${renderComponent($$result2, "MenuIcon", $$MenuIcon, { "class": "w-4 h-4 text-gray-800 dark:text-neutral-300" })} ${renderComponent($$result2, "ThemeIcon", $$ThemeIcon, { "class": "w-10" })} </div> </div> ${renderComponent($$result2, "MenuItems", $$MenuItems, { "class": "hidden lg:flex" }, { "default": ($$result3) => renderTemplate` <ul class="flex flex-col lg:flex-row lg:gap-5 gap-3 mt-3 lg:mt-0  pb-4 lg:pb-0 border-b border-neutral-400 lg:border-b-0"> <li class="flex items-center"><a href="/about">About</a></li> <li class="flex items-center"><a href="/art">Art</a></li> ${renderComponent($$result3, "ThemeIcon", $$ThemeIcon, { "class": "w-10 hidden lg:flex" })} </ul> ` })} ` })} </header>`;
}, "E:/Desktop/artist website/art-void/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-20 md:mt-36 mx-4"> <div class="border-t pt-8 pb-10"> <div class="mb-8"> <h3 class="text-lg font-bold mb-3">Get in Touch</h3> <p class="text-sm mb-4">
Interested in commissioning artwork, purchasing pieces, or discussing exhibition opportunities? I'd love to hear from you!
</p> <div class="flex gap-4 flex-wrap"> <a href="mailto:contact@example.com" class="flex items-center gap-2 text-sm hover:underline"> <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> </svg>
Email
</a> <a href="https://instagram.com" target="_blank" class="flex items-center gap-2 text-sm hover:underline"> <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><circle cx="17.5" cy="6.5" r="1.5"></circle> </svg>
Instagram
</a> <a href="https://twitter.com" target="_blank" class="flex items-center gap-2 text-sm hover:underline"> <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path> </svg>
Twitter
</a> </div> </div> <p class="text-xs text-gray-600 dark:text-neutral-400">
&copy; ${today.getFullYear()}. All rights reserved.
</p> </div> </footer>`;
}, "E:/Desktop/artist website/art-void/src/components/Footer.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b };
