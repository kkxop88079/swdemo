import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    base: "./",
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_APP_API_URL,
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        },
      },
      host: process.env.VITE_SERVER_HOST,
      https: true,
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  })
}
