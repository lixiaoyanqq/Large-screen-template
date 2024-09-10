/*
 * @Author: dbkey
 * @Date: 2024-09-05 19:06:50
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-05 19:07:53
 * @FilePath: /data-screen/src/enums/request-enums.ts
 * @Description:
 *
 *
 */
export enum RequestEnum {
    // token key
    GB_TOKEN_KEY = 'auth-token',
    // 验签key
    GB_SIGN_KEY = 'sign',
    // 时间戳 key
    GB_TIMESTAMP_KEY = 'timestamp',
    POST = 'post',
    GET = 'get',
}
export enum ReqCodeEnum {
    Unauthorized = 401, // token过期
    Success = 200, //成功
}
