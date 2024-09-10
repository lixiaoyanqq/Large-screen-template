/*
 * @Author: dbkey
 * @Date: 2024-09-05 19:00:15
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-05 19:30:07
 * @FilePath: /data-screen/src/api/index.ts
 * @Description:
 *
 *
 */
import { GET, POST, FILE, FILEPOST, PUT, GETNOBASE } from './api';
import Index from './modules';
export { GETNOBASE };

interface urlObj {
    [key: string | number]: string;
}

export const urlObj: urlObj = {
    ...Index,
};
type Keys = string | number;

export const currentGET = (key: Keys, param?: any) => {
    return GET(urlObj[key], param || {});
};
export const currentGETPath = (key: Keys, type: string | string[], param?: any) => {
    return GET(urlObj[key] + type, param || {});
};
export const currentPUT = (key: Keys, param: any) => {
    return PUT(urlObj[key], param);
};
export const currentPOST = (key: Keys, param?: any) => {
    return POST(urlObj[key], param || {});
};
export const currentPOSTPath = (key: Keys, type: Keys, param?: any) => {
    return POST(urlObj[key] + type, param || {});
};
//通用上传
export const currentFILEPOST = (key: Keys, param?: any) => {
    return FILEPOST(urlObj[key], param || {}, {});
};
// 通用接口集合
export const currentApi = {
    currentPOST,
    currentGET,
};
