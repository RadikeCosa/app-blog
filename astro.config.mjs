import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readingTime';
import rehypePrettyCode from 'rehype-pretty-code';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
const options = {
	onVisitLine(node) {
		if (node.children.length === 0) {
			node.children = [
				{
					type: 'text',
					value: ' '
				}
			];
		}
	},
	onVisitHighlightedLine(node) {
		// Adding a class to the highlighted line
		node.properties.className = ['highlighted'];
	}
};

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-tech-blog-ten.vercel.app/',
	markdown: {
		syntaxHighlight: false,
		// Disable syntax built-in syntax hightlighting from astro
		rehypePlugins: [[rehypePrettyCode, options]],
		remarkPlugins: [remarkReadingTime]
	},
	integrations: [tailwind(), react(), sitemap()]
});
