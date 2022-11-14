import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
//import preact from '@astrojs/preact';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		mdx(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		})
	]
});