/*
 * @Author: dbkey
 * @Date: 2024-09-05 17:20:48
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-05 17:49:40
 * @FilePath: /data-screen/src/components/BasicBox/src/default.ts
 * @Description: 盒子基础配置
 * 
 * 
 */
import type { BasicBoxProps } from "types/components.common";
import BasicTitleBg from "@/assets/images/basic/box/basic-title-bg.png";
import BasicTitleBgLarge from "@/assets/images/basic/box/basic-title-bg-large.png";

export const BasicConfig: BasicBoxProps = {
    title: 'Default',
    size: 'small',
    titleBgImg: BasicTitleBg,
    titleLargeBgImg: BasicTitleBgLarge,
    height: '255px',
    titleHeight: '52px'
}
