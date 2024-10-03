import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from './astro/server_Baz5CvDw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { f as formatDate } from './data.util_BUvrBZqh.mjs';
import { $ as $$Tags } from './Tags_Dp2Q8NZA.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(post.url, "href")}> <div class="h-full rounded-2xl bg-stone-200/50 from-orange-900 via-amber-700 to-white p-[1px] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r dark:bg-gray-900"> <div class="flex h-full w-full
		flex-col
    rounded-[1rem]
		bg-stone-300
		p-4
		text-gray-900
    opacity-90
    dark:bg-stone-800
		dark:text-white"> <div class="flex-auto"> <div class="flex justify-between pb-4 text-xs"> <p>${formatDate(post.frontmatter.pubDate)}</p> <p>${post.frontmatter.minutesRead}</p> </div> <p class="pb-4 text-lg font-bold">${post.frontmatter.title}</p> ${renderComponent($$result, "Tags", $$Tags, { "tags": post.frontmatter.tags })} <p class="line-clamp-6 pt-4">${post.frontmatter.excerpt}</p> </div> <p class="pt-4 underline">read more →</p> </div> </div> </a>`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/components/Card.astro", void 0);

export { $$Card as $ };
