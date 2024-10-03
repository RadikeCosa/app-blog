/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, b as createAstro, a as renderComponent } from '../chunks/astro/server_Baz5CvDw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Section, a as $$Base, A as AppConfig } from '../chunks/Base_BmB6aP8x.mjs';
import 'clsx';
import { $ as $$Card } from '../chunks/Card_BfRS86Mv.mjs';
import { s as sortPostsByDate } from '../chunks/data.util_BUvrBZqh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Social;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mr-3 h-10 w-24 rounded-xl bg-stone-200/50 from-orange-900 via-amber-700 to-white p-[1px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r"> <a${addAttribute(href, "href")} target="_blank" class="flex h-full w-full items-center justify-center rounded-[0.7rem] bg-stone-300
		p-4
		text-gray-900
    opacity-90
    dark:bg-stone-800
		dark:text-white"> ${renderSlot($$result, $$slots["default"])} </a> </div>`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/components/Social.astro", void 0);

const $$Astro$2 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const site = Astro2.site;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<br> <p class="pb-2 pt-6 text-4xl font-bold">Hola esta es la bitacora de desarrollo de una App 🚀</p> <div class="text-sm"> <p class="py-2">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.Lorem ipsum dolor sit amet <span class="font-black text-orange-600">Angular</span> adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.Lorem ipsum dolor sit amet consectetur <span class="font-black text-orange-600">Angular</span> elit. Tenetur vero esse non molestias eos <span class="font-black text-orange-600">Angular</span>, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.
</p> <p class="py-2">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.Lorem ipsum dolor sit amet <span class="font-black text-orange-600">Angular</span> adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.
</p> <p class="py-2">
Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.Lorem ipsum dolor sit amet consectetur <span class="font-black text-orange-600">Angular</span> elit. Tenetur vero esse non molestias eos <span class="font-black text-orange-600">Angular</span>, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.
</p> </div> <div class="flex"> ${renderComponent($$result2, "Social", $$Social, { "href": "https://github.com/#" }, { "default": ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> ` })} ${renderComponent($$result2, "Social", $$Social, { "href": "https://www.linkedin.com/#" }, { "default": ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path> </svg> ` })} ${renderComponent($$result2, "Social", $$Social, { "href": `${site}rss.xml` }, { "default": ($$result3) => renderTemplate` <svg viewBox="0 0 24 24" width="1.2em" height="1.2em"><path fill="currentColor" d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"></path></svg> ` })} </div> ` })}`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$LatestPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LatestPosts;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-between pb-4"> <p class="text-xl font-bold">Latest Posts</p> <a href="/posts" class="underline hover:text-orange-600">all posts →</a> </div> <div class="flex flex-col pb-4 md:flex-row"> ${posts.map((post) => renderTemplate`<div class="mb-4 basis-1 last:mr-0 md:mr-4 md:basis-1/3"> ${renderComponent($$result2, "Card", $$Card, { "post": post })} </div>`)} </div> ` })}`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/components/LatestPosts.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { title } = AppConfig;
  const { description } = AppConfig;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/first_blog_post.md": () => import('../chunks/first_blog_post_41gt6UFg.mjs').then(n => n._)}), () => "./posts/*.md");
  allPosts.sort(sortPostsByDate);
  const latestPosts = allPosts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "LatestPosts", $$LatestPosts, { "posts": latestPosts })} ` })}`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
