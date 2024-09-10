<!--
 * @Author: dbkey
 * @Date: 2024-09-06 18:40:42
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-06 19:46:13
 * @FilePath: /data-screen/src/views/Home/components/Main.vue
 * @Description: 
 * 
 * 
-->
<template>
    <div class="flex justify-center top-container">
        <div class="flex justify-start item-container">
            <div class="item-container-detail">
                <div class="detail-left">
                    <div class="detail-bg">
                        <div class="detail-img-box">
                            <img :src="circularRotationBg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="detail-right">
                    <div class="right-title">行政监察数量</div>
                    <div class="right-value">
                        <span>0</span>
                        件
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-start item-container">
            <div class="item-container-detail">
                <div class="detail-left">
                    <div class="detail-bg">
                        <div class="detail-img-box">
                            <img :src="circularRotationBg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="detail-right">
                    <div class="right-title">行政监察数量</div>
                    <div class="right-value">
                        <span>0</span>
                        件
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-start item-container">
            <div class="item-container-detail">
                <div class="detail-left">
                    <div class="detail-bg">
                        <div class="detail-img-box">
                            <img :src="circularRotationBg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="detail-right">
                    <div class="right-title">行政监察数量</div>
                    <div class="right-value">
                        <span>0</span>
                        件
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import administrativeCheckIcon from '@/assets/images/main/administrative-check-icon.png';
import administrativeCompulsionIcon from '@/assets/images/main/administrative-compulsion-icon.png';
import circularRotationBg from '@/assets/images/main/circular-rotation-bg.png';
</script>
<style lang="scss" scoped>
.top-container {
    position: absolute;
    top: 10.5%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 999999;
    .item-container {
        width: 340px;
        height: 80px;
        // border: 2px solid #3e7899;
        padding: 10px;
        display: flex;
        justify-content: center;
        .item-container-detail {
            display: flex;
            .detail-left {
                width: 64px;
                display: flex;
                justify-content: center;
                align-items: center;
                .detail-bg {
                    width: 54px;
                    height: 54px;
                    background: url('@/assets/images/main/administrative-check-icon.png') 50% 50% /
                        50% 50% no-repeat;
                    .detail-img-box {
                        mix-blend-mode: normal;
                        opacity: 1;
                        animation: spin 2s linear infinite;
                        img {
                            width: 100%;
                            height: 1005;
                        }
                    }
                }
            }
            .detail-right {
                flex: 1;
                color: #fff;
                font-size: 18px;
                font-weight: bolder;
                padding: 0 10px;
                .right-title {
                    padding: 4px 0;
                }
                .right-value {
                    span {
                        font-size: 24px;
                    }
                }
            }
        }
    }
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>