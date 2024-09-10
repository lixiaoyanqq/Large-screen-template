<!--
 * @Author: dbkey
 * @Date: 2024-09-06 15:51:12
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-06 18:34:16
 * @FilePath: /data-screen/src/views/Home/components/Right.vue
 * @Description: 
 * 
 * 
-->
<template>
    <div class="container-right mt-22px mr-16px">
        <!-- <BasicBox :title="'123'" :height="'285px'"></BasicBox> -->
        <div class="area-tab-box">
            <div class="area-menu">
                <div
                    class="area-menu-item"
                    :class="tabIndex == index ? 'tabAction' : ''"
                    v-for="(tab, index) in tabs"
                    :key="'tab' + index"
                    @click="onChangeTab(index)"
                >
                    <div class="area-menu-item-cont">{{ tab.name }}</div>
                </div>
            </div>
        </div>
        <div class="area-list-box">
            <div class="area-list-tab-menu">
                <div
                    class="list-tab-item"
                    @click="onChangeListTab(liIdx)"
                    v-for="(item, liIdx) in listTabs"
                    :key="'list' + liIdx"
                >
                    <div
                        class="list-tab-item-cont"
                        :class="listTabIdx == liIdx ? 'listActionTab' : ''"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <div class="area-list-wrapper">
                <div
                    class="list-content"
                    v-for="(listItem, listIndex) in lists"
                    :key="'listItem' + listIndex"
                >
                    <div class="list-image">
                        <div class="list-image-bg"></div>
                    </div>
                    <div class="list-title">{{ listItem.title }}</div>
                    <div class="list-progress-bar">
                        <div class="progress-undertone">
                            <div class="progress-value" :style="{ width: listItem.width }"></div>
                            <div class="progress-bg" :style="{ left: listItem.left }"></div>
                        </div>
                    </div>
                    <div class="list-value">{{ listItem.number }}人</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const tabIndex = ref(0);
const listTabIdx = ref(0);
const tabs = ref([{ name: '区直部门' }, { name: '乡镇' }, { name: '乡镇' }]);
const listTabs = ref([{ name: '案件数量' }, { name: '执法人员' }, { name: '人均执法量' }]);
const lists = ref([
    { title: '北京市综合执法部门', number: '66', width: '80px', left: '70px' },
    { title: '北京市农业执法部门', number: '56', width: '20px', left: '10px' },
    { title: '北京市文化执法部门', number: '16', width: '60px', left: '50px' },
    { title: '北京市园林执法部门', number: '6', width: '66px', left: '56px' },
    { title: '北京市经济执法部门', number: '11', width: '89px', left: '79px' },
    { title: '北京市民政执法部门', number: '10', width: '19px', left: '9px' },
    { title: '北京市人力执法部门', number: '60', width: '0px', left: '0px' },
    { title: '北京市自然执法部门', number: '66', width: '75px', left: '65px' },
    { title: '北京市住房执法部门', number: '40', width: '49px', left: '39px' },
    { title: '北京市医疗执法部门', number: '30', width: '10px', left: '10px' },
    { title: '北京市交通执法部门', number: '90', width: '44px', left: '34px' },
    { title: '北京市退役军人执法部门', number: '166', width: '55px', left: '45px' },
    { title: '北京市综合执法部门', number: '66', width: '90px', left: '80px' },
    { title: '北京市农业执法部门', number: '56', width: '60px', left: '50px' },
    { title: '北京市文化执法部门', number: '16', width: '0px', left: '0px' },
    { title: '北京市园林执法部门', number: '6', width: '51px', left: '41px' },
    { title: '北京市经济执法部门', number: '11', width: '74px', left: '64px' },
    { title: '北京市民政执法部门', number: '10', width: '92px', left: '82px' },
    { title: '北京市人力执法部门', number: '60', width: '70px', left: '60px' },
    { title: '北京市自然执法部门', number: '66', width: '50px', left: '40px' },
    { title: '北京市住房执法部门', number: '40', width: '90px', left: '80px' },
    { title: '北京市医疗执法部门', number: '30', width: '89px', left: '79px' },
    { title: '北京市交通执法部门', number: '90', width: '59px', left: '49px' },
    { title: '北京市退役军人执法部门', number: '166' },
]);
const onChangeTab = (index: number) => {
    tabIndex.value = index;
};
const onChangeListTab = (index: number) => {
    listTabIdx.value = index;
};
</script>
<style lang="scss" scoped>
@import './style/right.scss';
</style>