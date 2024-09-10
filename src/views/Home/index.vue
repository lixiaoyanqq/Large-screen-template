<!--
 * @Author: dbkey
 * @Date: 2024-09-04 15:52:11
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-09 17:34:13
 * @FilePath: /data-screen/src/views/Home/index.vue
 * @Description: 首页
 * 
 * 
-->

<script setup lang="ts">
import { useLoadingStore } from '@/stores/loading';
import { useHomeDataStore } from '@/stores/home';
import Left from './components/Left.vue';
import Right from './components/Right.vue';
import Main from './components/Main.vue';
import { moduleKeys, modalType } from './config.tsx';
import { getModule } from '@/api/home/home';

const { startLoading, endLoading } = useLoadingStore();
const { isLoading } = storeToRefs(useLoadingStore());

const modalTitle = ref('');
const open = ref(false);
const openMapModal = ref(false);
const columns = ref<any>([]);
const tabData = ref([]);
const parentData: ParentDataType = {
    showMore,
};
function showMore(type: number) {
    open.value = false;
    const { key, title, index, columns: col } = modalType[type];
    const rules = getRule(key, index || 0);
    console.log(rules, 'r');
    columns.value = col;
    tabData.value = getValue(key, index || 0);
    modalTitle.value = title;
    setTimeout(() => {
        open.value = true;
    }, 300);
}
provide('data', parentData);
const { interValGeyAllModuleData, getRule, getValue } = useHomeDataStore();
startLoading();
interValGeyAllModuleData(moduleKeys, endLoading);
endLoading();
console.log('isLoading----', isLoading);
const markerList = ref<{ [key: string]: any }[]>([]);

onMounted(() => {
    // init();
});
const init = async () => {
    let data = getModule();
};
</script>
<template>
    <PageWrapper :title="'智慧消防物联网监控感知平台'" show-setting>
        <Left v-if="!isLoading" v-motion-slide-left />
        <Right v-if="!isLoading" v-motion-slide-right />
        <Main v-if="!isLoading" />
        <Map class="map" ref="mapRef" v-if="!isLoading" />
        <!-- <Loading class="loading" /> -->
    </PageWrapper>
</template>

<style lang="scss" scoped>
@import '@/styles/common.scss';
</style>