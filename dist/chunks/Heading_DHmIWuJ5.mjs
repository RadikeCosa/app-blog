import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from './astro/server_Baz5CvDw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heading;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-bold pt-6 text-center text-4xl">${title}</p>`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/components/Heading.astro", void 0);

export { $$Heading as $ };
