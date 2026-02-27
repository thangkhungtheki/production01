export const Barchart = () => import('../..\\components\\Barchart.vue' /* webpackChunkName: "components/barchart" */).then(c => wrapFunctional(c.default || c))
export const CountBar = () => import('../..\\components\\CountBar.vue' /* webpackChunkName: "components/count-bar" */).then(c => wrapFunctional(c.default || c))
export const Doughnutchart = () => import('../..\\components\\Doughnutchart.vue' /* webpackChunkName: "components/doughnutchart" */).then(c => wrapFunctional(c.default || c))
export const LichSuYeuCau = () => import('../..\\components\\LichSuYeuCau.vue' /* webpackChunkName: "components/lich-su-yeu-cau" */).then(c => wrapFunctional(c.default || c))
export const LoadingBar = () => import('../..\\components\\LoadingBar.vue' /* webpackChunkName: "components/loading-bar" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../..\\components\\Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const PhieuYeuCau = () => import('../..\\components\\PhieuYeuCau.vue' /* webpackChunkName: "components/phieu-yeu-cau" */).then(c => wrapFunctional(c.default || c))
export const PrintRequest = () => import('../..\\components\\PrintRequest.vue' /* webpackChunkName: "components/print-request" */).then(c => wrapFunctional(c.default || c))
export const TopNavBar = () => import('../..\\components\\TopNavBar.vue' /* webpackChunkName: "components/top-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const AssetsImportAssetModal = () => import('../..\\components\\assets\\ImportAssetModal.vue' /* webpackChunkName: "components/assets-import-asset-modal" */).then(c => wrapFunctional(c.default || c))
export const AssetsRequestModal = () => import('../..\\components\\assets\\RequestModal.vue' /* webpackChunkName: "components/assets-request-modal" */).then(c => wrapFunctional(c.default || c))
export const AssetsStocktakeSession = () => import('../..\\components\\assets\\StocktakeSession.vue' /* webpackChunkName: "components/assets-stocktake-session" */).then(c => wrapFunctional(c.default || c))
export const AlertDanger = () => import('../..\\components\\alert\\danger.vue' /* webpackChunkName: "components/alert-danger" */).then(c => wrapFunctional(c.default || c))
export const DepartmentAssets = () => import('../..\\components\\department\\DepartmentAssets.vue' /* webpackChunkName: "components/department-assets" */).then(c => wrapFunctional(c.default || c))
export const ModalHopdonginput = () => import('../..\\components\\modal\\hopdonginput.vue' /* webpackChunkName: "components/modal-hopdonginput" */).then(c => wrapFunctional(c.default || c))
export const ModalInput = () => import('../..\\components\\modal\\input.vue' /* webpackChunkName: "components/modal-input" */).then(c => wrapFunctional(c.default || c))
export const ModalInput1 = () => import('../..\\components\\modal\\input1.vue' /* webpackChunkName: "components/modal-input1" */).then(c => wrapFunctional(c.default || c))
export const ModalCreateType = () => import('../..\\components\\modal\\ModalCreateType.vue' /* webpackChunkName: "components/modal-create-type" */).then(c => wrapFunctional(c.default || c))
export const ModalDisposeAsset = () => import('../..\\components\\modal\\ModalDisposeAsset.vue' /* webpackChunkName: "components/modal-dispose-asset" */).then(c => wrapFunctional(c.default || c))
export const ModalDisposeBatch = () => import('../..\\components\\modal\\ModalDisposeBatch.vue' /* webpackChunkName: "components/modal-dispose-batch" */).then(c => wrapFunctional(c.default || c))
export const ModalEditAsset = () => import('../..\\components\\modal\\ModalEditAsset.vue' /* webpackChunkName: "components/modal-edit-asset" */).then(c => wrapFunctional(c.default || c))
export const ModalImportAsset = () => import('../..\\components\\modal\\ModalImportAsset.vue' /* webpackChunkName: "components/modal-import-asset" */).then(c => wrapFunctional(c.default || c))
export const ModalIncidentFast = () => import('../..\\components\\modal\\ModalIncidentFast.vue' /* webpackChunkName: "components/modal-incident-fast" */).then(c => wrapFunctional(c.default || c))
export const ModalTransferAsset = () => import('../..\\components\\modal\\ModalTransferAsset.vue' /* webpackChunkName: "components/modal-transfer-asset" */).then(c => wrapFunctional(c.default || c))
export const TableUser = () => import('../..\\components\\table\\table.user.vue' /* webpackChunkName: "components/table-user" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
