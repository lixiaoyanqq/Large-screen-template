/*
 * @Author: dbkey
 * @Date: 2024-09-05 19:00:39
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-05 19:46:39
 * @FilePath: /data-screen/src/api/home/home.tsx
 * @Description:
 *
 *
 */
import { ServicePrefixEnum } from '@/enums/comon';
import { ContentTypeEnum, RequestEnum } from '@/enums/httpEnum';
import Axios from '@/utils/http/axios/index';

export function getModule(data: any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + '/cockpitDataModule/getModule',
    method: RequestEnum.POST,
    data,
  });
}