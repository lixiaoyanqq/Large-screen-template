<!--
 * @Author: dbkey
 * @Date: 2024-09-05 18:10:30
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-09 18:18:34
 * @FilePath: /data-screen/src/views/Home/components/Left.vue
 * @Description: 
 * 
 * 
-->
<script lang="ts" setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import { useHomeDataStore } from '@/stores/home';
import { getEquipmentOption } from '@/views/Home/config';
const { getModuleName, getValue, getName } = useHomeDataStore();
import * as echarts from 'echarts';
import iconBg from '@/assets/images/icon/icon-bg.png';
import checkIcon from '@/assets/images/icon/check-icon.png'; //监督人员
import departmentIcon from '@/assets/images/icon/department-icon.png'; //执法部门
import numberIcon from '@/assets/images/icon/number-icon.png'; //执法人员
import organizationIcon from '@/assets/images/icon/organization-icon.png'; //受委托组织
import reviewIcon from '@/assets/images/icon/review-icon.png'; //法制审核人员
import subjectIcon from '@/assets/images/icon/subject-icon.png'; //执法主体
import iconVideoBg from '@/assets/videos/icon-video-bg.mp4';
import administrativeCheckIcon from '@/assets/images/main/administrative-check-icon.png';
import doubleTriangleIcon from '@/assets/images/icon/double-triangle-icon.svg';
import rightTriangleTcon from '@/assets/images/icon/right-triangle-icon.svg';
import semiTriangularIcon from '@/assets/images/icon/semi-triangular-icon.svg';
import triangleIconBg from '@/assets/images/icon/triangle-icon-bg.svg';
import startIconBg from '@/assets/images/icon/start-icon-bg.png';
import { log } from 'console';

// interface Props {
//     moduleKeys: string[];
// }
// const props = defineProps<Props>();
// const { moduleKeys } = unref(props);
const elements = ref([
    { icon: departmentIcon, title: '执法部门', value: '1' },
    { icon: subjectIcon, title: '执法部门', value: '5' },
    { icon: organizationIcon, title: '受委托组织', value: '10' },
    { icon: numberIcon, title: '执法人员', value: '51' },
    { icon: checkIcon, title: '监督人员', value: '19' },
    { icon: reviewIcon, title: '法制审核人员', value: '21' },
]);
let myChart: any = null;
const option = ref({});
let moduleKeys = ['fireAwarenessEquipmentType', 'fireFightingEquipmentType'];
const setOption = () => {
    myChart && myChart.clear();
    let data = [];
    let yData = [];
    let xData = [];
    console.log('moduleKeys', moduleKeys);
    data = getValue(moduleKeys[1], 0);
    yData = data.map((item: { [key: string]: string | number }) => item.value);
    xData = data.map((item: { [key: string]: string | number }) => item.name);
    console.log('data', data);
    console.log('yData', yData);
    console.log('xData', xData);

    setTimeout(() => {
        option.value = getEquipmentOption(xData, yData);
        myChart && myChart.setOption(option.value);
    }, 500);
};
const initChart = () => {
    console.log('666');
    var dom: any = document.getElementById('barChart');
    myChart = echarts.init(dom);
    setOption();
};
onMounted(() => {
    nextTick(() => {
        initChart();
    });
});
</script>
<template>
    <div class="container-left mt-22px ml-16px">
        <BasicBox :title="'执法要素'" :height="'285px'">
            <div class="enforcement-elements">
                <div class="element-content">
                    <div
                        class="element-item"
                        v-for="(eleItem, eleIndex) in elements"
                        :key="'ele' + eleIndex"
                    >
                        <div class="element-item-header">{{ eleItem.title }}</div>
                        <div class="element-item-body">
                            <div class="body-bg-box">
                                <div class="body-bg">
                                    <img :src="eleItem.icon" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="element-item-footer">
                            <span>{{ eleItem.value }}</span>
                            人
                        </div>
                    </div>
                </div>
            </div>
        </BasicBox>
        <BasicBox :title="'执法事项'" :height="'235px'">
            <div class="enforcement-matters">
                <div class="matters-left">
                    <div class="matters-item">
                        <div class="matters-item-left">
                            <div class="matter-video">
                                <video
                                    autoplay
                                    loop
                                    muted
                                    playsinline
                                    webkitplaysinline="true"
                                    controlslist="nodownload"
                                    x5-video-player-type="h5"
                                    webkit-playsinline
                                    x5-playsinline
                                >
                                    <source :src="iconVideoBg" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <img class="video-image1" :src="administrativeCheckIcon" alt="" />
                                <img class="video-image2" :src="doubleTriangleIcon" alt="" />
                                <img class="video-image3" :src="triangleIconBg" alt="" />
                                <img class="video-image4" :src="rightTriangleTcon" alt="" />
                                <img class="video-image5" :src="rightTriangleTcon" alt="" />
                            </div>
                            <img class="video-image6" :src="startIconBg" alt="" />
                        </div>
                        <div class="matters-item-right">
                            <div class="matters-item-title">行政检查</div>
                            <div class="matters-item-value">
                                <span>1</span>
                                项
                            </div>
                        </div>
                    </div>
                </div>
                <div class="matters-right">
                    <div class="matters-item">
                        <div class="matters-item-left">
                            <div class="matter-video">
                                <video
                                    autoplay
                                    loop
                                    muted
                                    playsinline
                                    webkitplaysinline="true"
                                    controlslist="nodownload"
                                    x5-video-player-type="h5"
                                    webkit-playsinline
                                    x5-playsinline
                                >
                                    <source :src="iconVideoBg" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <img class="video-image1" :src="administrativeCheckIcon" alt="" />
                                <img class="video-image2" :src="doubleTriangleIcon" alt="" />
                                <img class="video-image3" :src="triangleIconBg" alt="" />
                                <img class="video-image4" :src="rightTriangleTcon" alt="" />
                                <img class="video-image5" :src="rightTriangleTcon" alt="" />
                            </div>
                            <img class="video-image6" :src="startIconBg" alt="" />
                        </div>
                        <div class="matters-item-right">
                            <div class="matters-item-title">行政处罚</div>
                            <div class="matters-item-value">
                                <span>2</span>
                                项
                            </div>
                        </div>
                    </div>
                    <div class="matters-item">
                        <div class="matters-item-left">
                            <div class="matter-video">
                                <video
                                    autoplay
                                    loop
                                    muted
                                    playsinline
                                    webkitplaysinline="true"
                                    controlslist="nodownload"
                                    x5-video-player-type="h5"
                                    webkit-playsinline
                                    x5-playsinline
                                >
                                    <source :src="iconVideoBg" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <img class="video-image1" :src="administrativeCheckIcon" alt="" />
                                <img class="video-image2" :src="doubleTriangleIcon" alt="" />
                                <img class="video-image3" :src="triangleIconBg" alt="" />
                                <img class="video-image4" :src="rightTriangleTcon" alt="" />
                                <img class="video-image5" :src="rightTriangleTcon" alt="" />
                            </div>
                            <img class="video-image6" :src="startIconBg" alt="" />
                        </div>
                        <div class="matters-item-right">
                            <div class="matters-item-title">行政强制</div>
                            <div class="matters-item-value">
                                <span>3</span>
                                项
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BasicBox>
        <BasicBox :title="'执法规则'" :height="'235px'">
            <div id="barChart"></div>
        </BasicBox>
    </div>
</template>
<style lang="scss" scoped>
@import './style/left.scss';
#barChart {
    height: 60%;
    width: 100%;
}
</style>