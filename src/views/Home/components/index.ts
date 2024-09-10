/*
 * @Author: dbkey
 * @Date: 2024-09-05 17:13:27
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-06 14:30:02
 * @FilePath: /data-screen/src/views/Home/components/index.ts
 * @Description:
 *
 *
 */
import { defineAsyncComponent } from 'vue';

const asyncComponents: Record<string, any> = {};

const components = import.meta.glob('./*.vue');
for (const path in components) {
    const match = path.match(/\.\/(.*?)\.vue$/);
    const componentName = match ? match[1] : '';
    asyncComponents[componentName] = defineAsyncComponent(() => import(`./${path.slice(2)}`));
}
// Left, Right, Bottom, Main
export const { Left } = asyncComponents;
