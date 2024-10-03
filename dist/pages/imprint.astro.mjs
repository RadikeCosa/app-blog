/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Baz5CvDw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Section, a as $$Base, A as AppConfig } from '../chunks/Base_BmB6aP8x.mjs';
export { renderers } from '../renderers.mjs';

const $$Imprint = createComponent(($$result, $$props, $$slots) => {
  const { title } = AppConfig;
  const { description } = AppConfig;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-sm"> <p class="pt-6 text-4xl">Imprint</p> <p class="pb-4 pt-10 text-lg font-bold">Information according to § 5 TMG:</p> <p>Ramiro Cosa</p> <p>Neuquen</p> <p>Argentina</p> <p class="pb-4 pt-10 text-lg font-bold">Contact</p> <p>E-Mail: <a href="mailto:nicolas.dunke@nd-solution.de">ramirocosa@gmail.com</a></p> <p>
Internet-Adress: <a class="underline" href="https://astro-tech-blog-ten.vercel.app/">https://ramirocosa.vercel.app/</a> </p> <p class="pb-4 pt-10 text-lg font-bold">Editorially Responsible</p> <p>See Information according to § 5 TMG.</p> <p class="pb-4 pt-10 text-lg font-bold">Graphics and images</p> <p>Unless specified differently, Ramiro Cosa is the creator of all graphics and images.</p> <p class="pt-10 text-lg font-bold">Disclaimer</p> <p class="pb-4 pt-10 text-base font-bold">Liability for content</p> <p>
All content on our website has been created with the utmost care and to the best of our
				knowledge. However, we cannot guarantee the accuracy, completeness, and timeliness of the
				content. As a service provider, we are responsible for our own content on these pages in
				accordance with § 7 (1) TMG. According to §§ 8 to 10 TMG, we as service providers are not
				obligated to monitor transmitted or stored third-party information or to investigate
				circumstances that indicate illegal activity. Obligations to remove or block the use of
				information under general law remain unaffected by this.
</p> <p>
However, liability in this regard is only possible from the time of knowledge of a specific
				legal violation. Upon becoming aware of such legal violations, we will remove this content
				immediately.
</p> <p class="pb-4 pt-10 text-base font-bold">Limitation of liability for external links</p> <p>
Our website contains links to external websites of third parties. We have no influence on
				the content of these directly or indirectly linked websites. Therefore, we cannot assume any
				liability for the "external links." The respective provider or operator (author) of the
				pages is responsible for the content of the external links.
</p> <p>
If we become aware of legal violations, the external links will be removed by us
				immediately.
</p> <p class="pb-4 pt-10 text-base font-bold">Copyright</p> <p>
The content and works published on our website are subject to <a class="underline" href="http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf">German copyright law</a>. The reproduction, processing, distribution, and any kind of exploitation beyond the
				limits of copyright require the prior written consent of the respective author in
				intellectual and material terms. Downloads and copies of this page are only permitted for
				private and non-commercial use. If the content on our website was not created by us, the
				copyrights of third parties must be observed. Third-party content is identified as such. If
				you nevertheless become aware of a copyright infringement, please inform us accordingly. If
				we become aware of legal violations, we will remove such content immediately.
</p> </div> ` })} ` })}`;
}, "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/pages/imprint.astro", void 0);

const $$file = "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/blog/astro-tech-blog/src/pages/imprint.astro";
const $$url = "/imprint";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Imprint,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
