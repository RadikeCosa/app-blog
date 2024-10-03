/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Baz5CvDw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Section, a as $$Base, A as AppConfig } from '../chunks/Base_BmB6aP8x.mjs';
import { $ as $$Tags } from '../chunks/Tags_Dp2Q8NZA.mjs';
import { $ as $$Heading } from '../chunks/Heading_DHmIWuJ5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { title } = AppConfig;
  const { description } = AppConfig;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/first_blog_post.md": () => import('../chunks/first_blog_post_41gt6UFg.mjs').then(n => n._)}), () => "../posts/*.md");
  const allTags = new Set(allPosts.map((post) => post.frontmatter.tags).flat());
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Heading", $$Heading, { "title": "Tags" })}` })} ${maybeRenderHead()}<div class="mx-auto w-full max-w-screen-md"> ${renderComponent($$result2, "Tags", $$Tags, { "tags": [...allTags], "withHref": true })} </div> ` })}`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
