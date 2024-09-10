<!--
 * @Author: dbkey
 * @Date: 2024-09-09 16:11:23
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-09 16:35:56
 * @FilePath: /data-screen/src/components/Map/index.vue
 * @Description: 地图组件
 * 
 * 
-->
<template>
    <BMap
        :heading="64.5"
        :tilt="50"
        :height="'100%'"
        class="map"
        :zoom="12"
        enableDoubleClickZoom
        enableScrollWheelZoom
        ak="0BMG1CekNJ2VVFRrrmX6x6qma8WHYGY0"
        mapStyleId="6053418609ae26d7c32f05d45ea7991b"
        :center="centerPoint"
        @initd="mapInitd"
    >
        <BMarker
            v-for="(marker, index) in props.markerList"
            :key="index"
            :position="{ lng: marker.lng, lat: marker.lat }"
            :data="marker"
            :icon="getMarkerIcon(marker.icon)"
        />
    </BMap>
</template>
<script lang="ts" setup>
import {} from 'vue';
import { BMap, BMarker, BPolygon, useAreaBoundary, BLabel } from 'vue3-baidu-map-gl';
import MapIconActiveImg from '@/assets/images/map/map-icon-active.png';
import MapIconImg from '@/assets/images/map/map-icon.png';

const props = defineProps({
    markerList: {
        type: Array<{ [key: string]: any }>,
        default: () => [],
    },
    areaName: {
        type: String,
        default: '陕西省西安市',
    },
    areaKey: {
        type: String,
        default: '陕西省西安市',
    },
});

// const defaultCanterPoint = { lng: 120.6803241, lat: 30.367823 };
const defaultCanterPoint = { lng: 108.95, lat: 34.27 };
const centerPoint = ref(defaultCanterPoint);
const map = ref<any>(null);
const { isLoading, boundaries, get } = useAreaBoundary();
const showSearchSelect = ref(false);
const selectValue = ref();
const searchMarkerRef = ref();

const getMarkerIcon = (icon: string) => {
    if (icon.includes('.png')) {
        const imgIcon = {
            imageUrl: icon,
            size: {
                width: 40,
                height: 40,
            },
        };
        return imgIcon;
    } else {
        return icon;
    }
};
const handleInitd = () => {
    get(props.areaName);
    setTimeout(() => {
        map.value.map.setCenter(defaultCanterPoint, {
            tilt: 55,
            heading: 39.5,
        });
        // centerPoint.value = defaultCanterPoint;
    }, 1000);
};
function mapInitd(e: any) {
    map.value = e;
    handleInitd();
}
</script>
<style lang="scss" scoped>
</style>