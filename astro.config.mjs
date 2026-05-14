// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

const enableKeystatic = process.env.ENABLE_KEYSTATIC === '1';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.socialhub.ai',
    integrations: [mdx(), sitemap(), ...(enableKeystatic ? [keystatic()] : [])],

    vite: {
		plugins: [tailwindcss()],
	},

    adapter: cloudflare()
});