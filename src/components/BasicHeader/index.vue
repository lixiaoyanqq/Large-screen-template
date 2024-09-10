<!--
 * @Author: dbkey
 * @Date: 2024-09-05 10:06:41
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-09 16:56:47
 * @FilePath: /data-screen/src/components/BasicHeader/index.vue
 * @Description: 公共组件头部
 * 
 * 
-->
<template>
    <div class="header-container">
        <div class="header-bg-01" @click="onGoHome"></div>
        <div class="title">陕西省行政执法数据分析平台</div>
        <img class="moving-light" :src="movingLightBg" alt="" />
        <a-space class="other">
            <div class="menu">
                <div
                    class="menu-item"
                    @click="onChangeMenu(menu)"
                    v-for="(menu, index) in menuList"
                    :key="menu.name + index"
                >
                    {{ menu.title }}
                </div>
            </div>
            <div class="time">{{ time }}</div>
        </a-space>
    </div>
    <div class="footer-container">
        <div class="footerMenu">
            <div class="footMenuItem">
                <div
                    class="menuItemCont"
                    :class="yearIndex == 1 ? 'actionItem' : ''"
                    @click="onChangeYear(1)"
                >
                    2022
                </div>
            </div>
            <div class="footMenuItem">
                <div
                    class="menuItemCont"
                    :class="yearIndex == 2 ? 'actionItem' : ''"
                    @click="onChangeYear(2)"
                >
                    2023
                </div>
            </div>
            <div class="footMenuItem">
                <div
                    class="menuItemCont"
                    :class="yearIndex == 3 ? 'actionItem' : ''"
                    @click="onChangeYear(3)"
                >
                    2024
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { toRaw, ref } from 'vue';
import { getDate } from '@/utils';
import { useSettingStore } from '@/stores';
import movingLightBg from '@/assets/images/header/moving-light-bg.png';
const router = useRouter();

const props = defineProps({
    title: {
        type: [String, Number],
        default: '',
    },
});
const menuList = ref([
    { name: 'fulfillDuty', path: '/fulfillDuty', title: '履责情况' },
    { name: 'lawActions', path: '/lawActions', title: '执法行为' },
    { name: 'lawMonitoring', path: '/lawMonitoring', title: '执法监测' },
    { name: 'lawPerformance', path: '/lawPerformance', title: '执法效能' },
    { name: 'lawsRegulations', path: '/lawsRegulations', title: '法律法规' },
    { name: 'organizational', path: '/organizational', title: '机构监督' },
    { name: 'team', path: '/team', title: '履责情况' },
]);
const yearIndex = ref(3);
const { title } = toRaw(props);
const time = ref(getDate('HH:mm:ss'));
setInterval(() => {
    time.value = getDate('HH:mm:ss');
}, 1000);
const onGoHome = () => {
    console.log('111');

    router.push({ name: 'home' });
};
const onChangeMenu = (menu: any) => {
    router.push({ name: menu.name });
};
const onChangeYear = (index: number) => {
    yearIndex.value = index;
};
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>