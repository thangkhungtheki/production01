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
const _6520c590 = () => interopDefault(import('..\\pages\\admin\\setting.vue' /* webpackChunkName: "pages/admin/setting" */))
const _634f8c86 = () => interopDefault(import('..\\pages\\baove\\taisan\\index.vue' /* webpackChunkName: "pages/baove/taisan/index" */))
const _aaa5e890 = () => interopDefault(import('..\\pages\\bep\\taisan\\index.vue' /* webpackChunkName: "pages/bep/taisan/index" */))
const _33294734 = () => interopDefault(import('..\\pages\\fandb\\taisan\\index.vue' /* webpackChunkName: "pages/fandb/taisan/index" */))
const _5b66c685 = () => interopDefault(import('..\\pages\\house\\taisan\\index.vue' /* webpackChunkName: "pages/house/taisan/index" */))
const _473110c6 = () => interopDefault(import('..\\pages\\ketoan\\action-logs.vue' /* webpackChunkName: "pages/ketoan/action-logs" */))
const _dd736830 = () => interopDefault(import('..\\pages\\ketoan\\baocao\\index.vue' /* webpackChunkName: "pages/ketoan/baocao/index" */))
const _9348c2ca = () => interopDefault(import('..\\pages\\ketoan\\danhsachtaisan\\index.vue' /* webpackChunkName: "pages/ketoan/danhsachtaisan/index" */))
const _a5f887ea = () => interopDefault(import('..\\pages\\ketoan\\dashboard.vue' /* webpackChunkName: "pages/ketoan/dashboard" */))
const _cc1dcbb8 = () => interopDefault(import('..\\pages\\ketoan\\disposal-tickets.vue' /* webpackChunkName: "pages/ketoan/disposal-tickets" */))
const _0840a3fe = () => interopDefault(import('..\\pages\\ketoan\\hopdong\\index.vue' /* webpackChunkName: "pages/ketoan/hopdong/index" */))
const _01158b66 = () => interopDefault(import('..\\pages\\ketoan\\hotrokythuat\\index.vue' /* webpackChunkName: "pages/ketoan/hotrokythuat/index" */))
const _0c690433 = () => interopDefault(import('..\\pages\\ketoan\\indexold1.vue' /* webpackChunkName: "pages/ketoan/indexold1" */))
const _6fd8e42e = () => interopDefault(import('..\\pages\\ketoan\\kiemke\\index.vue' /* webpackChunkName: "pages/ketoan/kiemke/index" */))
const _a861b074 = () => interopDefault(import('..\\pages\\ketoan\\nhat-ky-nhap-kho.vue' /* webpackChunkName: "pages/ketoan/nhat-ky-nhap-kho" */))
const _0f982a95 = () => interopDefault(import('..\\pages\\ketoan\\report\\index.vue' /* webpackChunkName: "pages/ketoan/report/index" */))
const _fa1a497a = () => interopDefault(import('..\\pages\\login\\checklogin.vue' /* webpackChunkName: "pages/login/checklogin" */))
const _2ed52766 = () => interopDefault(import('..\\pages\\template\\table.vue' /* webpackChunkName: "pages/template/table" */))
const _26ffd25a = () => interopDefault(import('..\\pages\\usr\\setting.vue' /* webpackChunkName: "pages/usr/setting" */))
const _379e0f9a = () => interopDefault(import('..\\pages\\baove\\taisan\\action-logs.vue' /* webpackChunkName: "pages/baove/taisan/action-logs" */))
const _0d924eb6 = () => interopDefault(import('..\\pages\\baove\\taisan\\baocao\\index.vue' /* webpackChunkName: "pages/baove/taisan/baocao/index" */))
const _11861e58 = () => interopDefault(import('..\\pages\\baove\\taisan\\danhsachtaisan\\index.vue' /* webpackChunkName: "pages/baove/taisan/danhsachtaisan/index" */))
const _9feba170 = () => interopDefault(import('..\\pages\\baove\\taisan\\dashboard.vue' /* webpackChunkName: "pages/baove/taisan/dashboard" */))
const _2bfaf847 = () => interopDefault(import('..\\pages\\baove\\taisan\\disposal-tickets.vue' /* webpackChunkName: "pages/baove/taisan/disposal-tickets" */))
const _30041aa6 = () => interopDefault(import('..\\pages\\baove\\taisan\\kiemke\\index.vue' /* webpackChunkName: "pages/baove/taisan/kiemke/index" */))
const _3dd905e9 = () => interopDefault(import('..\\pages\\baove\\taisan\\nhat-ky-nhap-kho.vue' /* webpackChunkName: "pages/baove/taisan/nhat-ky-nhap-kho" */))
const _7788b752 = () => interopDefault(import('..\\pages\\baove\\taisan\\report\\index.vue' /* webpackChunkName: "pages/baove/taisan/report/index" */))
const _5197e14c = () => interopDefault(import('..\\pages\\bep\\taisan\\action-logs.vue' /* webpackChunkName: "pages/bep/taisan/action-logs" */))
const _7c0305d7 = () => interopDefault(import('..\\pages\\bep\\taisan\\baocao\\index.vue' /* webpackChunkName: "pages/bep/taisan/baocao/index" */))
const _0532f98a = () => interopDefault(import('..\\pages\\bep\\taisan\\danhsachtaisan\\index.vue' /* webpackChunkName: "pages/bep/taisan/danhsachtaisan/index" */))
const _0150c57a = () => interopDefault(import('..\\pages\\bep\\taisan\\dashboard.vue' /* webpackChunkName: "pages/bep/taisan/dashboard" */))
const _3a3a65d5 = () => interopDefault(import('..\\pages\\bep\\taisan\\disposal-tickets.vue' /* webpackChunkName: "pages/bep/taisan/disposal-tickets" */))
const _9a5f7050 = () => interopDefault(import('..\\pages\\bep\\taisan\\kiemke\\index.vue' /* webpackChunkName: "pages/bep/taisan/kiemke/index" */))
const _4c187377 = () => interopDefault(import('..\\pages\\bep\\taisan\\nhat-ky-nhap-kho.vue' /* webpackChunkName: "pages/bep/taisan/nhat-ky-nhap-kho" */))
const _0b5636f8 = () => interopDefault(import('..\\pages\\bep\\taisan\\report\\index.vue' /* webpackChunkName: "pages/bep/taisan/report/index" */))
const _3c408fc8 = () => interopDefault(import('..\\pages\\fandb\\taisan\\action-logs.vue' /* webpackChunkName: "pages/fandb/taisan/action-logs" */))
const _5f3a0553 = () => interopDefault(import('..\\pages\\fandb\\taisan\\baocao\\index.vue' /* webpackChunkName: "pages/fandb/taisan/baocao/index" */))
const _4e20bd06 = () => interopDefault(import('..\\pages\\fandb\\taisan\\danhsachtaisan\\index.vue' /* webpackChunkName: "pages/fandb/taisan/danhsachtaisan/index" */))
const _320ae2f6 = () => interopDefault(import('..\\pages\\fandb\\taisan\\dashboard.vue' /* webpackChunkName: "pages/fandb/taisan/dashboard" */))
const _776764d9 = () => interopDefault(import('..\\pages\\fandb\\taisan\\disposal-tickets.vue' /* webpackChunkName: "pages/fandb/taisan/disposal-tickets" */))
const _d3f17158 = () => interopDefault(import('..\\pages\\fandb\\taisan\\kiemke\\index.vue' /* webpackChunkName: "pages/fandb/taisan/kiemke/index" */))
const _ed751b0a = () => interopDefault(import('..\\pages\\fandb\\taisan\\nhat-ky-nhap-kho.vue' /* webpackChunkName: "pages/fandb/taisan/nhat-ky-nhap-kho" */))
const _44e83800 = () => interopDefault(import('..\\pages\\fandb\\taisan\\report\\index.vue' /* webpackChunkName: "pages/fandb/taisan/report/index" */))
const _76fb8e59 = () => interopDefault(import('..\\pages\\house\\taisan\\action-logs.vue' /* webpackChunkName: "pages/house/taisan/action-logs" */))
const _51a0b8b8 = () => interopDefault(import('..\\pages\\house\\taisan\\baocao\\index.vue' /* webpackChunkName: "pages/house/taisan/baocao/index" */))
const _273f7a57 = () => interopDefault(import('..\\pages\\house\\taisan\\danhsachtaisan\\index.vue' /* webpackChunkName: "pages/house/taisan/danhsachtaisan/index" */))
const _14335c72 = () => interopDefault(import('..\\pages\\house\\taisan\\dashboard.vue' /* webpackChunkName: "pages/house/taisan/dashboard" */))
const _4749d8e8 = () => interopDefault(import('..\\pages\\house\\taisan\\disposal-tickets.vue' /* webpackChunkName: "pages/house/taisan/disposal-tickets" */))
const _0dfce5a5 = () => interopDefault(import('..\\pages\\house\\taisan\\kiemke\\index.vue' /* webpackChunkName: "pages/house/taisan/kiemke/index" */))
const _5927e68a = () => interopDefault(import('..\\pages\\house\\taisan\\nhat-ky-nhap-kho.vue' /* webpackChunkName: "pages/house/taisan/nhat-ky-nhap-kho" */))
const _55818251 = () => interopDefault(import('..\\pages\\house\\taisan\\report\\index.vue' /* webpackChunkName: "pages/house/taisan/report/index" */))
const _18c95199 = () => interopDefault(import('..\\pages\\ketoan\\hotrokythuat\\lichsu.vue' /* webpackChunkName: "pages/ketoan/hotrokythuat/lichsu" */))
const _3d10079c = () => interopDefault(import('..\\pages\\ketoan\\report\\catalog.vue' /* webpackChunkName: "pages/ketoan/report/catalog" */))
const _39128c28 = () => interopDefault(import('..\\pages\\ketoan\\report\\index1.vue' /* webpackChunkName: "pages/ketoan/report/index1" */))
const _38f65d26 = () => interopDefault(import('..\\pages\\ketoan\\report\\index2.vue' /* webpackChunkName: "pages/ketoan/report/index2" */))
const _4c4b4646 = () => interopDefault(import('..\\pages\\ketoan\\report\\xuatnhapton.vue' /* webpackChunkName: "pages/ketoan/report/xuatnhapton" */))
const _104ff5d4 = () => interopDefault(import('..\\pages\\ketoan\\report\\xuatnhapton.old.vue' /* webpackChunkName: "pages/ketoan/report/xuatnhapton.old" */))
const _6b105919 = () => interopDefault(import('..\\pages\\baove\\taisan\\report\\catalog.vue' /* webpackChunkName: "pages/baove/taisan/report/catalog" */))
const _7997c4cf = () => interopDefault(import('..\\pages\\baove\\taisan\\report\\index1.vue' /* webpackChunkName: "pages/baove/taisan/report/index1" */))
const _79a5dc50 = () => interopDefault(import('..\\pages\\baove\\taisan\\report\\index2.vue' /* webpackChunkName: "pages/baove/taisan/report/index2" */))
const _f7a8b04c = () => interopDefault(import('..\\pages\\baove\\taisan\\report\\xuatnhapton.vue' /* webpackChunkName: "pages/baove/taisan/report/xuatnhapton" */))
const _32618993 = () => interopDefault(import('..\\pages\\baove\\taisan\\report\\xuatnhapton.old.vue' /* webpackChunkName: "pages/baove/taisan/report/xuatnhapton.old" */))
const _6b8601cb = () => interopDefault(import('..\\pages\\bep\\taisan\\report\\catalog.vue' /* webpackChunkName: "pages/bep/taisan/report/catalog" */))
const _50513ddd = () => interopDefault(import('..\\pages\\bep\\taisan\\report\\index1.vue' /* webpackChunkName: "pages/bep/taisan/report/index1" */))
const _505f555e = () => interopDefault(import('..\\pages\\bep\\taisan\\report\\index2.vue' /* webpackChunkName: "pages/bep/taisan/report/index2" */))
const _e94cb0e8 = () => interopDefault(import('..\\pages\\bep\\taisan\\report\\xuatnhapton.vue' /* webpackChunkName: "pages/bep/taisan/report/xuatnhapton" */))
const _23773f76 = () => interopDefault(import('..\\pages\\bep\\taisan\\report\\xuatnhapton.old.vue' /* webpackChunkName: "pages/bep/taisan/report/xuatnhapton.old" */))
const _5cfb1247 = () => interopDefault(import('..\\pages\\fandb\\taisan\\report\\catalog.vue' /* webpackChunkName: "pages/fandb/taisan/report/catalog" */))
const _580ba43e = () => interopDefault(import('..\\pages\\fandb\\taisan\\report\\index1.vue' /* webpackChunkName: "pages/fandb/taisan/report/index1" */))
const _57ef753c = () => interopDefault(import('..\\pages\\fandb\\taisan\\report\\index2.vue' /* webpackChunkName: "pages/fandb/taisan/report/index2" */))
const _bacbcbf0 = () => interopDefault(import('..\\pages\\fandb\\taisan\\report\\xuatnhapton.vue' /* webpackChunkName: "pages/fandb/taisan/report/xuatnhapton" */))
const _9a61967e = () => interopDefault(import('..\\pages\\fandb\\taisan\\report\\xuatnhapton.old.vue' /* webpackChunkName: "pages/fandb/taisan/report/xuatnhapton.old" */))
const _a3fb3f50 = () => interopDefault(import('..\\pages\\house\\taisan\\report\\catalog.vue' /* webpackChunkName: "pages/house/taisan/report/catalog" */))
const _5ab859b0 = () => interopDefault(import('..\\pages\\house\\taisan\\report\\index1.vue' /* webpackChunkName: "pages/house/taisan/report/index1" */))
const _5ac67131 = () => interopDefault(import('..\\pages\\house\\taisan\\report\\index2.vue' /* webpackChunkName: "pages/house/taisan/report/index2" */))
const _6439f799 = () => interopDefault(import('..\\pages\\house\\taisan\\report\\xuatnhapton.vue' /* webpackChunkName: "pages/house/taisan/report/xuatnhapton" */))
const _81983c5c = () => interopDefault(import('..\\pages\\house\\taisan\\report\\xuatnhapton.old.vue' /* webpackChunkName: "pages/house/taisan/report/xuatnhapton.old" */))

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
    path: "/admin/setting",
    component: _6520c590,
    name: "admin-setting"
  }, {
    path: "/baove/taisan",
    component: _634f8c86,
    name: "baove-taisan"
  }, {
    path: "/bep/taisan",
    component: _aaa5e890,
    name: "bep-taisan"
  }, {
    path: "/fandb/taisan",
    component: _33294734,
    name: "fandb-taisan"
  }, {
    path: "/house/taisan",
    component: _5b66c685,
    name: "house-taisan"
  }, {
    path: "/ketoan/action-logs",
    component: _473110c6,
    name: "ketoan-action-logs"
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
    path: "/ketoan/disposal-tickets",
    component: _cc1dcbb8,
    name: "ketoan-disposal-tickets"
  }, {
    path: "/ketoan/hopdong",
    component: _0840a3fe,
    name: "ketoan-hopdong"
  }, {
    path: "/ketoan/hotrokythuat",
    component: _01158b66,
    name: "ketoan-hotrokythuat"
  }, {
    path: "/ketoan/indexold1",
    component: _0c690433,
    name: "ketoan-indexold1"
  }, {
    path: "/ketoan/kiemke",
    component: _6fd8e42e,
    name: "ketoan-kiemke"
  }, {
    path: "/ketoan/nhat-ky-nhap-kho",
    component: _a861b074,
    name: "ketoan-nhat-ky-nhap-kho"
  }, {
    path: "/ketoan/report",
    component: _0f982a95,
    name: "ketoan-report"
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
  }, {
    path: "/baove/taisan/action-logs",
    component: _379e0f9a,
    name: "baove-taisan-action-logs"
  }, {
    path: "/baove/taisan/baocao",
    component: _0d924eb6,
    name: "baove-taisan-baocao"
  }, {
    path: "/baove/taisan/danhsachtaisan",
    component: _11861e58,
    name: "baove-taisan-danhsachtaisan"
  }, {
    path: "/baove/taisan/dashboard",
    component: _9feba170,
    name: "baove-taisan-dashboard"
  }, {
    path: "/baove/taisan/disposal-tickets",
    component: _2bfaf847,
    name: "baove-taisan-disposal-tickets"
  }, {
    path: "/baove/taisan/kiemke",
    component: _30041aa6,
    name: "baove-taisan-kiemke"
  }, {
    path: "/baove/taisan/nhat-ky-nhap-kho",
    component: _3dd905e9,
    name: "baove-taisan-nhat-ky-nhap-kho"
  }, {
    path: "/baove/taisan/report",
    component: _7788b752,
    name: "baove-taisan-report"
  }, {
    path: "/bep/taisan/action-logs",
    component: _5197e14c,
    name: "bep-taisan-action-logs"
  }, {
    path: "/bep/taisan/baocao",
    component: _7c0305d7,
    name: "bep-taisan-baocao"
  }, {
    path: "/bep/taisan/danhsachtaisan",
    component: _0532f98a,
    name: "bep-taisan-danhsachtaisan"
  }, {
    path: "/bep/taisan/dashboard",
    component: _0150c57a,
    name: "bep-taisan-dashboard"
  }, {
    path: "/bep/taisan/disposal-tickets",
    component: _3a3a65d5,
    name: "bep-taisan-disposal-tickets"
  }, {
    path: "/bep/taisan/kiemke",
    component: _9a5f7050,
    name: "bep-taisan-kiemke"
  }, {
    path: "/bep/taisan/nhat-ky-nhap-kho",
    component: _4c187377,
    name: "bep-taisan-nhat-ky-nhap-kho"
  }, {
    path: "/bep/taisan/report",
    component: _0b5636f8,
    name: "bep-taisan-report"
  }, {
    path: "/fandb/taisan/action-logs",
    component: _3c408fc8,
    name: "fandb-taisan-action-logs"
  }, {
    path: "/fandb/taisan/baocao",
    component: _5f3a0553,
    name: "fandb-taisan-baocao"
  }, {
    path: "/fandb/taisan/danhsachtaisan",
    component: _4e20bd06,
    name: "fandb-taisan-danhsachtaisan"
  }, {
    path: "/fandb/taisan/dashboard",
    component: _320ae2f6,
    name: "fandb-taisan-dashboard"
  }, {
    path: "/fandb/taisan/disposal-tickets",
    component: _776764d9,
    name: "fandb-taisan-disposal-tickets"
  }, {
    path: "/fandb/taisan/kiemke",
    component: _d3f17158,
    name: "fandb-taisan-kiemke"
  }, {
    path: "/fandb/taisan/nhat-ky-nhap-kho",
    component: _ed751b0a,
    name: "fandb-taisan-nhat-ky-nhap-kho"
  }, {
    path: "/fandb/taisan/report",
    component: _44e83800,
    name: "fandb-taisan-report"
  }, {
    path: "/house/taisan/action-logs",
    component: _76fb8e59,
    name: "house-taisan-action-logs"
  }, {
    path: "/house/taisan/baocao",
    component: _51a0b8b8,
    name: "house-taisan-baocao"
  }, {
    path: "/house/taisan/danhsachtaisan",
    component: _273f7a57,
    name: "house-taisan-danhsachtaisan"
  }, {
    path: "/house/taisan/dashboard",
    component: _14335c72,
    name: "house-taisan-dashboard"
  }, {
    path: "/house/taisan/disposal-tickets",
    component: _4749d8e8,
    name: "house-taisan-disposal-tickets"
  }, {
    path: "/house/taisan/kiemke",
    component: _0dfce5a5,
    name: "house-taisan-kiemke"
  }, {
    path: "/house/taisan/nhat-ky-nhap-kho",
    component: _5927e68a,
    name: "house-taisan-nhat-ky-nhap-kho"
  }, {
    path: "/house/taisan/report",
    component: _55818251,
    name: "house-taisan-report"
  }, {
    path: "/ketoan/hotrokythuat/lichsu",
    component: _18c95199,
    name: "ketoan-hotrokythuat-lichsu"
  }, {
    path: "/ketoan/report/catalog",
    component: _3d10079c,
    name: "ketoan-report-catalog"
  }, {
    path: "/ketoan/report/index1",
    component: _39128c28,
    name: "ketoan-report-index1"
  }, {
    path: "/ketoan/report/index2",
    component: _38f65d26,
    name: "ketoan-report-index2"
  }, {
    path: "/ketoan/report/xuatnhapton",
    component: _4c4b4646,
    name: "ketoan-report-xuatnhapton"
  }, {
    path: "/ketoan/report/xuatnhapton.old",
    component: _104ff5d4,
    name: "ketoan-report-xuatnhapton.old"
  }, {
    path: "/baove/taisan/report/catalog",
    component: _6b105919,
    name: "baove-taisan-report-catalog"
  }, {
    path: "/baove/taisan/report/index1",
    component: _7997c4cf,
    name: "baove-taisan-report-index1"
  }, {
    path: "/baove/taisan/report/index2",
    component: _79a5dc50,
    name: "baove-taisan-report-index2"
  }, {
    path: "/baove/taisan/report/xuatnhapton",
    component: _f7a8b04c,
    name: "baove-taisan-report-xuatnhapton"
  }, {
    path: "/baove/taisan/report/xuatnhapton.old",
    component: _32618993,
    name: "baove-taisan-report-xuatnhapton.old"
  }, {
    path: "/bep/taisan/report/catalog",
    component: _6b8601cb,
    name: "bep-taisan-report-catalog"
  }, {
    path: "/bep/taisan/report/index1",
    component: _50513ddd,
    name: "bep-taisan-report-index1"
  }, {
    path: "/bep/taisan/report/index2",
    component: _505f555e,
    name: "bep-taisan-report-index2"
  }, {
    path: "/bep/taisan/report/xuatnhapton",
    component: _e94cb0e8,
    name: "bep-taisan-report-xuatnhapton"
  }, {
    path: "/bep/taisan/report/xuatnhapton.old",
    component: _23773f76,
    name: "bep-taisan-report-xuatnhapton.old"
  }, {
    path: "/fandb/taisan/report/catalog",
    component: _5cfb1247,
    name: "fandb-taisan-report-catalog"
  }, {
    path: "/fandb/taisan/report/index1",
    component: _580ba43e,
    name: "fandb-taisan-report-index1"
  }, {
    path: "/fandb/taisan/report/index2",
    component: _57ef753c,
    name: "fandb-taisan-report-index2"
  }, {
    path: "/fandb/taisan/report/xuatnhapton",
    component: _bacbcbf0,
    name: "fandb-taisan-report-xuatnhapton"
  }, {
    path: "/fandb/taisan/report/xuatnhapton.old",
    component: _9a61967e,
    name: "fandb-taisan-report-xuatnhapton.old"
  }, {
    path: "/house/taisan/report/catalog",
    component: _a3fb3f50,
    name: "house-taisan-report-catalog"
  }, {
    path: "/house/taisan/report/index1",
    component: _5ab859b0,
    name: "house-taisan-report-index1"
  }, {
    path: "/house/taisan/report/index2",
    component: _5ac67131,
    name: "house-taisan-report-index2"
  }, {
    path: "/house/taisan/report/xuatnhapton",
    component: _6439f799,
    name: "house-taisan-report-xuatnhapton"
  }, {
    path: "/house/taisan/report/xuatnhapton.old",
    component: _81983c5c,
    name: "house-taisan-report-xuatnhapton.old"
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
