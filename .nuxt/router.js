import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42eac88e = () => interopDefault(import('..\\pages\\baove\\index.vue' /* webpackChunkName: "pages/baove/index" */))
const _77deca80 = () => interopDefault(import('..\\pages\\bep\\index.vue' /* webpackChunkName: "pages/bep/index" */))
const _0b09113c = () => interopDefault(import('..\\pages\\fandb\\index.vue' /* webpackChunkName: "pages/fandb/index" */))
const _d43d12f0 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _14011ce6 = () => interopDefault(import('..\\pages\\house\\index.vue' /* webpackChunkName: "pages/house/index" */))
const _4bb34405 = () => interopDefault(import('..\\pages\\ketoan\\index.vue' /* webpackChunkName: "pages/ketoan/index" */))
const _6b5dfbb2 = () => interopDefault(import('..\\pages\\lichtiec\\index.vue' /* webpackChunkName: "pages/lichtiec/index" */))
const _164671a4 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _2230d547 = () => interopDefault(import('..\\pages\\marketing\\index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _5051c5de = () => interopDefault(import('..\\pages\\nhansu\\index.vue' /* webpackChunkName: "pages/nhansu/index" */))
const _2d04c421 = () => interopDefault(import('..\\pages\\sales\\index.vue' /* webpackChunkName: "pages/sales/index" */))
const _4dc42550 = () => interopDefault(import('..\\pages\\trangtri\\index.vue' /* webpackChunkName: "pages/trangtri/index" */))
const _c52b97c8 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _6d275cf5 = () => interopDefault(import('..\\pages\\xindex.vue' /* webpackChunkName: "pages/xindex" */))
const _191f9557 = () => interopDefault(import('..\\pages\\a4form\\testa4.vue' /* webpackChunkName: "pages/a4form/testa4" */))
const _47e6a124 = () => interopDefault(import('..\\pages\\ketoan\\baocao\\index.vue' /* webpackChunkName: "pages/ketoan/baocao/index" */))
const _45e0f7d7 = () => interopDefault(import('..\\pages\\ketoan\\danhsachtaisan\\index.vue' /* webpackChunkName: "pages/ketoan/danhsachtaisan/index" */))
const _6e8fe172 = () => interopDefault(import('..\\pages\\ketoan\\dashboard.vue' /* webpackChunkName: "pages/ketoan/dashboard" */))
const _25aaf642 = () => interopDefault(import('..\\pages\\ketoan\\hopdong\\index.vue' /* webpackChunkName: "pages/ketoan/hopdong/index" */))
const _7eb3e325 = () => interopDefault(import('..\\pages\\ketoan\\kiemke\\index.vue' /* webpackChunkName: "pages/ketoan/kiemke/index" */))
const _738f005e = () => interopDefault(import('..\\pages\\ketoan\\report\\index.vue' /* webpackChunkName: "pages/ketoan/report/index" */))
const _c2b1a302 = () => interopDefault(import('..\\pages\\login\\checklogin.vue' /* webpackChunkName: "pages/login/checklogin" */))
const _430542ee = () => interopDefault(import('..\\pages\\template\\table.vue' /* webpackChunkName: "pages/template/table" */))
const _557bae17 = () => interopDefault(import('..\\pages\\usr\\setting.vue' /* webpackChunkName: "pages/usr/setting" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/baove",
    component: _42eac88e,
    name: "baove"
  }, {
    path: "/bep",
    component: _77deca80,
    name: "bep"
  }, {
    path: "/fandb",
    component: _0b09113c,
    name: "fandb"
  }, {
    path: "/home",
    component: _d43d12f0,
    name: "home"
  }, {
    path: "/house",
    component: _14011ce6,
    name: "house"
  }, {
    path: "/ketoan",
    component: _4bb34405,
    name: "ketoan"
  }, {
    path: "/lichtiec",
    component: _6b5dfbb2,
    name: "lichtiec"
  }, {
    path: "/login",
    component: _164671a4,
    name: "login"
  }, {
    path: "/marketing",
    component: _2230d547,
    name: "marketing"
  }, {
    path: "/nhansu",
    component: _5051c5de,
    name: "nhansu"
  }, {
    path: "/sales",
    component: _2d04c421,
    name: "sales"
  }, {
    path: "/trangtri",
    component: _4dc42550,
    name: "trangtri"
  }, {
    path: "/user",
    component: _c52b97c8,
    name: "user"
  }, {
    path: "/xindex",
    component: _6d275cf5,
    name: "xindex"
  }, {
    path: "/a4form/testa4",
    component: _191f9557,
    name: "a4form-testa4"
  }, {
    path: "/ketoan/baocao",
    component: _47e6a124,
    name: "ketoan-baocao"
  }, {
    path: "/ketoan/danhsachtaisan",
    component: _45e0f7d7,
    name: "ketoan-danhsachtaisan"
  }, {
    path: "/ketoan/dashboard",
    component: _6e8fe172,
    name: "ketoan-dashboard"
  }, {
    path: "/ketoan/hopdong",
    component: _25aaf642,
    name: "ketoan-hopdong"
  }, {
    path: "/ketoan/kiemke",
    component: _7eb3e325,
    name: "ketoan-kiemke"
  }, {
    path: "/ketoan/report",
    component: _738f005e,
    name: "ketoan-report"
  }, {
    path: "/login/checklogin",
    component: _c2b1a302,
    name: "login-checklogin"
  }, {
    path: "/template/table",
    component: _430542ee,
    name: "template-table"
  }, {
    path: "/usr/setting",
    component: _557bae17,
    name: "usr-setting"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
