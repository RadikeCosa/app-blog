import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  return rss({
    title: 'nicdun.dev - blog',
    description: 'Crafting the Digital Future with Web Development Wonders',
    site: context.site,
    items: await pagesGlobToRssItems(
      /* #__PURE__ */ Object.assign({"./posts/first_blog_post.md": () => import('../chunks/first_blog_post_41gt6UFg.mjs').then(n => n._)}),
    ),
    stylesheet: './rss/styles.xsl',
    customData: `<language>en-us</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
