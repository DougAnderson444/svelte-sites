import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			strict: false
		}
	},
	worker: {
		format: 'es' //  default is 'iife' // https://vitejs.dev/config/#worker-format
	}
};

export default config;
