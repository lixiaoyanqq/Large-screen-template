<!--
 * @Author: dbkey
 * @Date: 2024-09-05 17:20:27
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-09 10:19:48
 * @FilePath: /data-screen/src/components/BasicBox/index.vue
 * @Description: 
 * 
 * 
-->
<template>
    <div class="basic-box">
        <div
            class="box-title"
            :style="{
                background: `url(${
                    titleBgImg || size == 'small' ? defaultTitleBg : titleLargeBgImg
                }) no-repeat`,
                backgroundSize: '100% 100%',
            }"
        >
            <div class="title">{{ title || defaultTitle }}</div>
            <div class="sub-title">
                <slot name="subTitle"></slot>
            </div>
        </div>
        <div
            class="box-content"
            :style="{
                height: `${height || defaultHeight}`,
            }"
        >
            <slot></slot>
        </div>
        <div class="box-footer"></div>
    </div>
</template>
<script lang="ts" setup>
import { toRaw } from 'vue';
import type { BasicBoxProps } from 'types/components.common';
import { BasicConfig } from './src/default';

const {
    title: defaultTitle,
    titleBgImg: defaultTitleBg,
    height: defaultHeight,
    titleLargeBgImg,
} = BasicConfig;

const props = defineProps<BasicBoxProps>();
const { title, titleBgImg, size } = toRaw(props);
</script>
<style lang="scss" scoped>
@import './src/index.scss';
</style>