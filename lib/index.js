import imgZoom from './imgZoom'

const install = function (Vue) {
  Vue.directive('imgZoom', {
    inserted: imgZoom
  })
}
export const imgZoomFn = imgZoom 

export default {
  install
}
