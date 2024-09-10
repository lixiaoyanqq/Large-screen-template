/*
 * @Author: dbkey
 * @Date: 2024-09-04 15:15:24
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-09 17:19:40
 * @FilePath: /data-screen/vite.config.ts
 * @Description: 配置文件
 *
 *
 */
import type { UserConfig, ConfigEnv } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createProxy } from './build/vite/proxy';
import { wrapperEnv } from './build/utils';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import topLevelAwait from 'vite-plugin-top-level-await';
import MonacoEditorNlsPlugin from 'vite-plugin-monaco-editor';
import progress from 'vite-plugin-progress';
import colors from 'picocolors';

import UnoCSS from 'unocss/vite';
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
    const root = process.cwd();
    console.log(command, mode);
    const env = loadEnv(mode, root);

    const viteEnv = wrapperEnv(env);

    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;
    return {
        base: VITE_PUBLIC_PATH,
        plugins: [
            progress({
                format: `${colors.green(colors.bold('Bouilding'))} ${colors.cyan('[:bar]')} :percent`,
            }),
            // MonacoEditorNlsPlugin({
            //   languageWorkers: ['json'],
            // }),
            topLevelAwait({
                // The export name of top-level await promise for each chunk module
                promiseExportName: '__tla',
                // The function to generate import names of top-level await promise in each chunk module
                promiseImportName: i => `__tla_${i}`,
            }),
            vue(),
            AutoImport({
                dts: true, // or a custom path
                // global imports to register
                imports: [
                    // presets
                    'vue',
                    'vue-router',
                    'pinia',
                    // custom
                    {
                        '@vueuse/core': [
                            // named imports
                            'useMouse', // import { useMouse } from '@vueuse/core',
                            'useDark', // import { useDark } from '@vueuse/core',
                            'useToggle',
                            'onClickOutside',
                        ],
                        axios: [
                            // default imports
                            ['default', 'axios'], // import { default as axios } from 'axios',
                        ],
                    },
                    // example type import
                    {
                        from: 'vue-router',
                        imports: ['RouteLocationRaw'],
                        type: true,
                    },
                ],
            }),
            UnoCSS(),
            Components({
                extensions: ['vue', 'md'],
                dts: 'src/components.d.ts',
                include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
                resolvers: [
                    AntDesignVueResolver({
                        importStyle: false,
                    }),
                ],
            }),
        ],
        publicDir: 'public',
        server: {
            host: '0.0.0.0',
            port: VITE_PORT,
            open: false,
            strictPort: false,
            proxy: createProxy(VITE_PROXY),
        },
        esbuild: {
            drop: VITE_DROP_CONSOLE ? ['console', 'debugger'] : [],
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
                components: resolve(__dirname, './src/components'),
                api: resolve(__dirname, './src/api'),
            },
        },
        css: {
            // css预处理器
            preprocessorOptions: {
                scss: {
                    // charset: false,
                    // additionalData: `@use "@/assets/css/variable.scss" as mat;`,
                },
            },
        },
        build: {
            outDir: 'dist',
            sourcemap: true,
            target: 'modules',
            // rollupOptions: {
            //   output: {
            //     manualChunks: {},
            //   },
            // },
        },
    };
});
