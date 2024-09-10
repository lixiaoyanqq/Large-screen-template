/*
 * @Author: dbkey
 * @Date: 2024-09-04 16:49:54
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-04 16:50:07
 * @FilePath: /data-screen/postcss.config.cjs
 * @Description: 
 * 
 * 
 */
// postcss.config.cjs
module.exports = {
    plugins: {
      '@unocss/postcss': {
        // 可选项
        content: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
      },
    },
  };
  