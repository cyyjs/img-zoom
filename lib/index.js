import imgZoom from './imgZoom'

const install = function (Vue) {
  Vue.directive('imgZoom', {
    inserted: imgZoom
  })
}

export default {
  install
}
