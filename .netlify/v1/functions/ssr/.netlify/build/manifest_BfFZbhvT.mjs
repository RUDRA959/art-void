import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_FMvgkE07.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/Desktop/artist%20website/art-void/","adapterName":"@astrojs/netlify","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DsDAVGd8.js"}],"styles":[{"type":"external","src":"/_astro/about.BDL0gf23.css"}],"routeData":{"route":"/art/[medium]","isIndex":false,"type":"page","pattern":"^\\/art\\/([^/]+?)\\/?$","segments":[[{"content":"art","dynamic":false,"spread":false}],[{"content":"medium","dynamic":true,"spread":false}]],"params":["medium"],"component":"src/pages/art/[medium].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DsDAVGd8.js"}],"styles":[{"type":"external","src":"/_astro/about.BDL0gf23.css"}],"routeData":{"route":"/art","isIndex":false,"type":"page","pattern":"^\\/art\\/?$","segments":[[{"content":"art","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/art.astro","pathname":"/art","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DsDAVGd8.js"}],"styles":[{"type":"external","src":"/_astro/about.BDL0gf23.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://placeholder.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/Desktop/artist website/art-void/src/pages/about.astro",{"propagation":"none","containsHead":true}],["E:/Desktop/artist website/art-void/src/pages/art/[medium].astro",{"propagation":"in-tree","containsHead":true}],["E:/Desktop/artist website/art-void/src/pages/art.astro",{"propagation":"in-tree","containsHead":true}],["E:/Desktop/artist website/art-void/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/art@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/art/[medium]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["E:/Desktop/artist website/art-void/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/art/[medium]@_@astro":"pages/art/_medium_.astro.mjs","\u0000@astro-page:src/pages/art@_@astro":"pages/art.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BfFZbhvT.mjs","E:/Desktop/artist website/art-void/src/content/art/bilbo-oil-15x15-hdf.md?astroContentCollectionEntry=true":"chunks/bilbo-oil-15x15-hdf_sKTXW8KE.mjs","E:/Desktop/artist website/art-void/src/content/art/watercolor-art.md?astroContentCollectionEntry=true":"chunks/watercolor-art_CJtwZq6b.mjs","E:/Desktop/artist website/art-void/src/content/art/bilbo-oil-15x15-hdf.md?astroPropagatedAssets":"chunks/bilbo-oil-15x15-hdf_7qSr122K.mjs","E:/Desktop/artist website/art-void/src/content/art/watercolor-art.md?astroPropagatedAssets":"chunks/watercolor-art_APK_WDv5.mjs","E:/Desktop/artist website/art-void/src/content/art/bilbo-oil-15x15-hdf.md":"chunks/bilbo-oil-15x15-hdf_BIHyTr3Q.mjs","E:/Desktop/artist website/art-void/src/content/art/watercolor-art.md":"chunks/watercolor-art_CejGQjxy.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DsDAVGd8.js","/astro/hoisted.js?q=1":"_astro/hoisted.BS5Kxtar.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.BDL0gf23.css","/bilbo.jpg","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/favicon.svg","/placeholder-about.jpg","/scan2.png","/Screenshot1.png","/_astro/hoisted.BS5Kxtar.js","/_astro/hoisted.DsDAVGd8.js","/about/index.html","/rss.xml"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
