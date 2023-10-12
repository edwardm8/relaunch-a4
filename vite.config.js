const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env
import { defineConfig } from 'vite';
export default {
	root: 'src/',
	publicDir: '../static/',
	base: '/cpnt-260-a4/',
	server:
	{
			host: true,
			open: !isCodeSandbox // Open if it's not a CodeSandbox
	},
	build: {
			outDir: '../dist',
			emptyOutDir: true,
			sourcemap: true,
			/*rollupOptions: {
				input: {
					main: resolve(__die, 'index.html'),
					nested: resolve(__dirname, 'nested/home.html'),
				},
			},*/
	},
}