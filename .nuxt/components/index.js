export { default as Barchart } from '../..\\components\\Barchart.vue'
export { default as CountBar } from '../..\\components\\CountBar.vue'
export { default as Doughnutchart } from '../..\\components\\Doughnutchart.vue'
export { default as LichSuYeuCau } from '../..\\components\\LichSuYeuCau.vue'
export { default as LoadingBar } from '../..\\components\\LoadingBar.vue'
export { default as Login } from '../..\\components\\Login.vue'
export { default as PhieuYeuCau } from '../..\\components\\PhieuYeuCau.vue'
export { default as PrintRequest } from '../..\\components\\PrintRequest.vue'
export { default as TopNavBar } from '../..\\components\\TopNavBar.vue'
export { default as AlertDanger } from '../..\\components\\alert\\danger.vue'
export { default as AssetsImportAssetModal } from '../..\\components\\assets\\ImportAssetModal.vue'
export { default as AssetsRequestModal } from '../..\\components\\assets\\RequestModal.vue'
export { default as AssetsStocktakeSession } from '../..\\components\\assets\\StocktakeSession.vue'
export { default as DepartmentAssets } from '../..\\components\\department\\DepartmentAssets.vue'
export { default as ModalHopdonginput } from '../..\\components\\modal\\hopdonginput.vue'
export { default as ModalInput } from '../..\\components\\modal\\input.vue'
export { default as ModalInput1 } from '../..\\components\\modal\\input1.vue'
export { default as ModalCreateType } from '../..\\components\\modal\\ModalCreateType.vue'
export { default as ModalDisposeAsset } from '../..\\components\\modal\\ModalDisposeAsset.vue'
export { default as ModalDisposeBatch } from '../..\\components\\modal\\ModalDisposeBatch.vue'
export { default as ModalEditAsset } from '../..\\components\\modal\\ModalEditAsset.vue'
export { default as ModalImportAsset } from '../..\\components\\modal\\ModalImportAsset.vue'
export { default as ModalIncidentFast } from '../..\\components\\modal\\ModalIncidentFast.vue'
export { default as ModalTransferAsset } from '../..\\components\\modal\\ModalTransferAsset.vue'
export { default as TableUser } from '../..\\components\\table\\table.user.vue'

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
