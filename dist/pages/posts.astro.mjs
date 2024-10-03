/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Baz5CvDw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Section, a as $$Base, A as AppConfig } from '../chunks/Base_BmB6aP8x.mjs';
import { $ as $$Card } from '../chunks/Card_BfRS86Mv.mjs';
import { $ as $$Heading } from '../chunks/Heading_DHmIWuJ5.mjs';
import { s as sortPostsByDate } from '../chunks/data.util_BUvrBZqh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { title } = AppConfig;
  const { description } = AppConfig;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./first_blog_post.md": () => import('../chunks/first_blog_post_41gt6UFg.mjs').then(n => n._)}), () => "./*.md");
  allPosts.sort(sortPostsByDate);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Heading", $$Heading, { "title": "Posts" })}` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate`${allPosts.map((post) => renderTemplate`${maybeRenderHead()}<div class="mb-4 basis-1 last:mb-0"> ${renderComponent($$result3, "Card", $$Card, { "post": post })} </div>`)}` })} ` })}`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/pages/posts/index.astro", void 0);

const $$file = "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
