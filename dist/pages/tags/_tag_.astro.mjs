/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Baz5CvDw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Section, a as $$Base, A as AppConfig } from '../../chunks/Base_BmB6aP8x.mjs';
import { $ as $$Card } from '../../chunks/Card_BfRS86Mv.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DHmIWuJ5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/first_blog_post.md": () => import('../../chunks/first_blog_post_41gt6UFg.mjs').then(n => n._)}), () => "../posts/*.md");
  const allTags = new Set(
    allPosts.map((post) => post.frontmatter.tags).flat()
  );
  return [...allTags].map((tag) => ({
    params: { tag },
    props: {
      posts: allPosts.filter(
        (post) => post.frontmatter.tags.includes(tag)
      )
    }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const title = AppConfig.title;
  const description = AppConfig.description;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": `Posts with #${tag}` })} ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate`${posts.filter((post) => post.frontmatter.tags?.includes(tag)).map((post) => renderTemplate`${maybeRenderHead()}<div class="mb-4 basis-1 last:mb-0"> ${renderComponent($$result3, "Card", $$Card, { "post": post })} </div>`)}` })} ` })}`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
