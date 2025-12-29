import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c219d6c = () => interopDefault(import('..\\pages\\baove\\index.vue' /* webpackChunkName: "pages/baove/index" */))
const _a55ffb08 = () => interopDefault(import('..\\pages\\bep\\index.vue' /* webpackChunkName: "pages/bep/index" */))
const _bbe50c10 = () => interopDefault(import('..\\pages\\fandb\\index.vue' /* webpackChunkName: "pages/fandb/index" */))
const _56e1f368 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _e5f84b6e = () => interopDefault(import('..\\pages\\house\\index.vue' /* webpackChunkName: "pages/house/index" */))
const _d5881a6e = () => interopDefault(import('..\\pages\\ketoan\\index.vue' /* webpackChunkName: "pages/ketoan/index" */))
const _75760976 = () => interopDefault(import('..\\pages\\lichtiec\\index.vue' /* webpackChunkName: "pages/lichtiec/index" */))
const _a56a4b40 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _5b1a8003 = () => interopDefault(import('..\\pages\\marketing\\index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _cc4b16bc = () => interopDefault(import('..\\pages\\nhansu\\index.vue' /* webpackChunkName: "pages/nhansu/index" */))
const _77eda646 = () => interopDefault(import('..\\pages\\sales\\index.vue' /* webpackChunkName: "pages/sales/index" */))
const _399409c8 = () => interopDefault(import('..\\pages\\trangtri\\index.vue' /* webpackChunkName: "pages/trangtri/index" */))
const _47d07840 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _16e802b1 = () => interopDefault(import('..\\pages\\xindex.vue' /* webpackChunkName: "pages/xindex" */))
const _00acbf13 = () => interopDefault(import('..\\pages\\a4form\\testa4.vue' /* webpackChunkName: "pages/a4form/testa4" */))
const _dd736830 = () => interopDefault(import('..\\pages\\ketoan\\baocao\\index.vue' /* webpackChunkName: "pages/ketoan/baocao/index" */))
const _9348c2ca = () => interopDefault(import('..\\pages\\ketoan\\danhsachtaisan\\index.vue' /* webpackChunkName: "pages/ketoan/danhsachtaisan/index" */))
const _a5f887ea = () => interopDefault(import('..\\pages\\ketoan\\dashboard.vue' /* webpackChunkName: "pages/ketoan/dashboard" */))
const _0840a3fe = () => interopDefault(import('..\\pages\\ketoan\\hopdong\\index.vue' /* webpackChunkName: "pages/ketoan/hopdong/index" */))
const _6fd8e42e = () => interopDefault(import('..\\pages\\ketoan\\kiemke\\index.vue' /* webpackChunkName: "pages/ketoan/kiemke/index" */))
const _fa1a497a = () => interopDefault(import('..\\pages\\login\\checklogin.vue' /* webpackChunkName: "pages/login/checklogin" */))
const _2ed52766 = () => interopDefault(import('..\\pages\\template\\table.vue' /* webpackChunkName: "pages/template/table" */))
const _26ffd25a = () => interopDefault(import('..\\pages\\usr\\setting.vue' /* webpackChunkName: "pages/usr/setting" */))

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
    component: _4c219d6c,
    name: "baove"
  }, {
    path: "/bep",
    component: _a55ffb08,
    name: "bep"
  }, {
    path: "/fandb",
    component: _bbe50c10,
    name: "fandb"
  }, {
    path: "/home",
    component: _56e1f368,
    name: "home"
  }, {
    path: "/house",
    component: _e5f84b6e,
    name: "house"
  }, {
    path: "/ketoan",
    component: _d5881a6e,
    name: "ketoan"
  }, {
    path: "/lichtiec",
    component: _75760976,
    name: "lichtiec"
  }, {
    path: "/login",
    component: _a56a4b40,
    name: "login"
  }, {
    path: "/marketing",
    component: _5b1a8003,
    name: "marketing"
  }, {
    path: "/nhansu",
    component: _cc4b16bc,
    name: "nhansu"
  }, {
    path: "/sales",
    component: _77eda646,
    name: "sales"
  }, {
    path: "/trangtri",
    component: _399409c8,
    name: "trangtri"
  }, {
    path: "/user",
    component: _47d07840,
    name: "user"
  }, {
    path: "/xindex",
    component: _16e802b1,
    name: "xindex"
  }, {
    path: "/a4form/testa4",
    component: _00acbf13,
    name: "a4form-testa4"
  }, {
    path: "/ketoan/baocao",
    component: _dd736830,
    name: "ketoan-baocao"
  }, {
    path: "/ketoan/danhsachtaisan",
    component: _9348c2ca,
    name: "ketoan-danhsachtaisan"
  }, {
    path: "/ketoan/dashboard",
    component: _a5f887ea,
    name: "ketoan-dashboard"
  }, {
    path: "/ketoan/hopdong",
    component: _0840a3fe,
    name: "ketoan-hopdong"
  }, {
    path: "/ketoan/kiemke",
    component: _6fd8e42e,
    name: "ketoan-kiemke"
  }, {
    path: "/login/checklogin",
    component: _fa1a497a,
    name: "login-checklogin"
  }, {
    path: "/template/table",
    component: _2ed52766,
    name: "template-table"
  }, {
    path: "/usr/setting",
    component: _26ffd25a,
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
