import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter(),

			typescript: {
				config: (config) => ({
					...config,
					include: [...config.include, '../drizzle.config.ts']
				})
			}
		}),
		visualizer({
			emitFile: true,
			filename: 'stats.html',
			open: true, // otomatis buka browser setelah build
			gzipSize: true, // tampilkan ukuran setelah gzip (lebih akurat estimasi ukuran nyata)
			brotliSize: true // tampilkan ukuran setelah brotli (kompresi lebih efisien, dipakai kebanyakan hosting modern)
		})
	]
});
