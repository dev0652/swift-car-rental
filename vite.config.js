import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://dev0652.github.io/swift-car-rental/

// https://medium.com/@pushplaybang/absolutely-dont-use-relative-paths-imports-in-your-vite-react-project-c8593f93bbea

export default defineConfig(({ command }) => {
  const config = {
    resolve: {
      alias: {
        src: '/src',
        components: '/src/components',
        pages: '/src/pages',
        services: '/src/services',
        styles: '/src/styles',
        images: '/src/images',
        assets: '/src/assets',
        data: '/src/data',
      },
    },
    plugins: [react()],
    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/swift-car-rental/';
  }

  return config;
});
