/*
 * @Author: dbkey
 * @Date: 2024-09-04 16:12:33
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-05 16:54:03
 * @FilePath: /data-screen/src/router/index.ts
 * @Description: 路由
 *
 *
 */
import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { start, close } from "@/utils/nprogress";
import { getToken } from "@/utils";
import { isDevFn } from "../../build/utils";
import { LOGIN_PATH, MIDDLE_LOGIN_PATH } from "@/helper";

const Home = () => import("@/views/Home/index.vue");//首页
const FulfillDuty = () => import("@/views/FulfillDuty/index.vue")//履责情况
const LawActions = () => import("@/views/LawActions/index.vue")//执法行为
const LawMonitoring = () => import("@/views/LawMonitoring/index.vue")//执法监测
const LawPerformance = () => import("@/views/LawPerformance/index.vue")//执法效能
const LawsRegulations = () => import("@/views/LawsRegulations/index.vue")//法律法规
const Organizational = () => import("@/views/Organizational/index.vue")//机构监督
const Team = () => import("@/views/Team/index.vue")//队伍监督

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title:'首页',
    },
    component: Home,
  },
  {
    path: "/fulfillDuty",
    name: "fulfillDuty",
    meta: {
      title:'履责情况',
    },
    component: FulfillDuty,
  },
  {
    path: "/lawActions",
    name: "lawActions",
    meta: {
      title:'执法行为',
    },
    component: LawActions,
  },
  {
    path: "/lawMonitoring",
    name: "lawMonitoring",
    meta: {
      title:'执法监测',
    },
    component: LawMonitoring,
  },
  {
    path: "/lawPerformance",
    name: "lawPerformance",
    meta: {
      title:'执法效能',
    },
    component: LawPerformance,
  },
  {
    path: "/lawsRegulations",
    name: "lawsRegulations",
    meta: {
      title:'法律法规',
    },
    component: LawsRegulations,
  },
  {
    path: "/organizational",
    name: "organizational",
    meta: {
      title:'机构监督',
    },
    component: Organizational,
  },
  {
    path: "/team",
    name: "team",
    meta: {
      title:'队伍监督',
    },
    component: Team,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

const whiteList = [LOGIN_PATH, MIDDLE_LOGIN_PATH];

router.beforeEach((to, from, next) => {
  start();
  document.title = "陕西省行政执法数据平台";
  if (!getToken() && !whiteList.includes(to.path)) {
    console.log("1");
    if (isDevFn(import.meta.env.MODE)) {
      setTimeout(() => {
        next();
      });
    } else {
      next(MIDDLE_LOGIN_PATH);
    }
  } else {
    setTimeout(() => {
      next();
    });
  }
});

router.afterEach(() => {
  setTimeout(() => {
    close();
  }, 1000);
});

export default router;
