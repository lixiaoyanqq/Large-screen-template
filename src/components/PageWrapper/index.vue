<!--
 * @Author: dbkey
 * @Date: 2024-09-04 19:42:30
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-06 14:51:08
 * @FilePath: /data-screen/src/components/PageWrapper/index.vue
 * @Description: 公共头部组件
 * 
 * 
-->
<template>
    <ScaleScreen
        width="1920"
        height="1080"
        :delay="500"
        :fullScreen="false"
        :boxStyle="{
            background: '#03050C',
            overflow: isScale ? 'hidden' : 'auto',
        }"
        :wrapperStyle="wrapperStyle"
        :autoScale="isScale"
    >
        <BasicHeader v-bind="$attrs" v-if="showHeader" />
        <slot></slot>
    </ScaleScreen>
</template>
<script lang="ts" setup>
import { unref } from 'vue';
import { useSettingStore } from '@/stores/index';
const settingStore = useSettingStore();
const { isScale } = storeToRefs(settingStore);
const wrapperStyle = {};
const props = defineProps({
    showHeader: {
        type: Boolean,
        default: true,
    },
    showSetting: {
        type: Boolean,
        default: false,
    },
    showBack: {
        type: Boolean,
        default: false,
    },
});
const { showHeader, showSetting } = unref(props);
</script>
<style scoped></style>