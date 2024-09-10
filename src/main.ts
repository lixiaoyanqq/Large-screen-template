/*
 * @Author: dbkey
 * @Date: 2024-09-04 15:15:24
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-05 14:20:12
 * @FilePath: /data-screen/src/main.ts
 * @Description: 
 * 
 * 
 */
import { createApp,App } from 'vue'
import { createPinia } from 'pinia';
import { MotionPlugin } from '@vueuse/motion';

import { registerGlobalComponents } from './utils/globalComponents';

import AppComponent from './App.vue'
import router from './router';

// 样式重置
import '@unocss/reset/normalize.css';
import '@unocss/reset/tailwind-compat.css';

// 引入 unocss
import 'virtual:uno.css';

import 'ant-design-vue/dist/reset.css';

//不使用mock 请注释掉
// import { mockXHR } from '@/mock/index';
// mockXHR();

const app: App = createApp(AppComponent);
app.use(MotionPlugin);
app.use(createPinia());
app.use(router);
// 这里注册全局组件
registerGlobalComponents(app);
app.mount('#app');
