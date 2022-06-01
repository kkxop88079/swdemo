import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    base: "./",
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        output: {
        // 
          // entryFileNames: `assets/[name].${timestamp}.js`,
          // chunkFileNames: `assets/[name].${timestamp}.js`,
          // assetFileNames: `assets/[name].${timestamp}.[ext]`
          entryFileNames: `assets/[name].${process.env.V103}.js`,
          chunkFileNames: `assets/[name].${process.env.V103}.js`,
          assetFileNames: `assets/[name].${process.env.V103}.[ext]`,
        },
      },
    },
  })
}
