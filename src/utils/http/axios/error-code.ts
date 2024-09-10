/*
 * @Author: dbkey
 * @Date: 2024-09-05 19:34:05
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-05 19:34:36
 * @FilePath: /data-screen/src/utils/http/axios/error-code.ts
 * @Description:
 *
 *
 */
const TIMEOUT = 10000,
    OTHER = [40000, 40001, 40002, 40003, 40004, 40005, 40006, 40007, 40008, 40009],
    NOLOGIN = [40000, 40001, 40002, 40003, 40004, 40005, 40006, 40008, 401, 600];
export { TIMEOUT, OTHER, NOLOGIN };
