/*
 * @Author: dbkey
 * @Date: 2024-09-05 11:50:59
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-05 11:56:18
 * @FilePath: /data-screen/build/vite/proxy.ts
 * @Description: Used to parse the .env.development proxy configuration
 * 
 * 
 */

import type { ProxyOptions } from 'vite';

type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

type ProxyTargetList = Record<string, ProxyOptions>;

const httpsRE = /^https:\/\//;

/**
 * Generate proxy
 * @param list
 */

export function createProxy(list: ProxyList = []) {
    console.log(list, 'list');
    const ret: ProxyTargetList = {};
    for (const [prefix, target] of list) {
        const isHttps = httpsRE.test(target);
        ret[prefix] = {
            target: target,
            changeOrigin: true,
            ws: true,
            rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
            // https is require secure=false
            ...(isHttps ? { secure: false } : {}),
          };
    }
    return ret;
}