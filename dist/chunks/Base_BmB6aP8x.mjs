import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as renderComponent, d as addAttribute, g as renderHead, b as createAstro } from './astro/server_Baz5CvDw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                   */

const $$Section = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto w-full max-w-screen-lg px-4 py-6"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/components/Section.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = /* @__PURE__ */ new Date();
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<footer class="text-center">
© ${year.getFullYear()} - <a class="underline hover:text-orange-600" href="/imprint/">Detalles</a> - made with ♥️ by <a class="underline hover:text-orange-600" href="https://ramirocosa.netlify.app/" target="_blank">radike.dev</a> </footer> ` })}`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/components/Footer.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-between"> <div class="text-3xl font-bold"> <a href="/">💻 <span class="pr-2 text-2xl text-gray-500">${"<"}</span>dev<span class="text-orange-600">.</span>log<span class="pl-2 text-2xl text-gray-500">${"/>"}</span></a> </div> <div class="flex items-center"> <nav> <ul class="hidden flex-row sm:flex"> <li><a href="/tags" class="mr-3 hover:text-orange-600">TAGS</a></li> <li><a href="/" class="hover:text-orange-600">BLOG</a></li> </ul> </nav> <div class="ml-3 flex flex-col justify-center"> <input type="checkbox" id="light-switch" class="light-switch sr-only"> <label class="tada relative cursor-pointer p-2" for="light-switch"> <svg class="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg"> <path class="fill-stone-800" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"></path> <path class="fill-gray-900" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"></path> </svg> <svg class="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg"> <path class="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"></path> <path class="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"></path> </svg> <span class="sr-only">Switch to light / dark version</span> </label> </div> </div> </div> ` })} `;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/components/Navbar.astro", void 0);

const AppConfig = {
  site_name: "AstroPress",
  title: "AstroPress | Astro and Tailwind CSS",
  description: "Boilerplate built with Astro and Tailwind CSS",
  author: "Nicolas",
  locale_region: "de-en",
  locale: "en"
};

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    head: { title, description }
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(AppConfig.author, "content")}><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml" href="/rss.xml"><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛠️</text></svg>">${renderHead()}</head> <body class="flex min-h-screen flex-col bg-stone-100 font-mono text-gray-950 dark:bg-stone-900 dark:text-white"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="flex-1"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/layouts/Base.astro", void 0);

export { $$Section as $, AppConfig as A, $$Base as a };
