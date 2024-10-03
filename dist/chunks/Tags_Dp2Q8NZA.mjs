import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro } from './astro/server_Baz5CvDw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, withHref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap"> ${tags.map((tag) => {
    const element = renderTemplate`<span class="mb-2 mr-2 rounded-xl bg-stone-600 px-3 py-1 text-xs font-bold uppercase text-white hover:bg-stone-500">
#${tag} </span>`;
    return withHref ? renderTemplate`<a${addAttribute(`/tags/${tag}`, "href")}>${element}</a>` : element;
  })} </div>`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/components/Tags.astro", void 0);

export { $$Tags as $ };
