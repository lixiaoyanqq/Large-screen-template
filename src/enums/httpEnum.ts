/*
 * @Author: dbkey
 * @Date: 2024-09-05 19:07:19
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-05 19:08:18
 * @FilePath: /data-screen/src/enums/httpEnum.ts
 * @Description: Request result set
 *
 *
 */
export enum ResultEnum {
    SUCCESS = 0,
    ERROR = 1,
    TIMEOUT = 401,
    TYPE = 'success',
}

/**
 * @description: request method
 */
export enum RequestEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // form-data qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    // form-data  upload
    FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
