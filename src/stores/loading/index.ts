/*
 * @Author: dbkey
 * @Date: 2024-09-04 19:51:41
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-06 10:51:39
 * @FilePath: /data-screen/src/stores/loading/index.ts
 * @Description:
 *
 *
 */
export const useLoadingStore = defineStore('loading', () => {
    // 定义状态
    const isLoading = ref(true);

    // 定义方法
    const startLoading = () => {
        isLoading.value = true;
    };

    const endLoading = () => {
        isLoading.value = false;
    };

    return { isLoading, startLoading, endLoading };
});
