const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env
import { defineConfig } from 'vite';
import {resolve} from 'path';

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname,'/dist')

export default {
	root,
	publicDir: '../static/',
	server:
	{
			host: true,
			open: !isCodeSandbox // Open if it's not a CodeSandbox
	},
	build: {
			outDir,
			emptyOutDir: true,
			sourcemap: true,
			rollupOptions: {
				input: {
					main: resolve(root, 'index.html'),
					contact: resolve(root, 'contact.html'),
					home: resolve(root,'home.html'),
					gallery: resolve(root,'gallery.html'),
				}
			}
	}
}