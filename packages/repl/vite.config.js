import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@sveltejs/repl': path.resolve('src/lib'),
			'@sveltejs/site-kit': path.resolve('../site-kit/src/lib')
		}
	},
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
