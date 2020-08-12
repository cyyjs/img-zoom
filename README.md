# img-zoom

## 使用方式

### 全局引入

```js
import Vue from 'vue'
import App from './App.vue'
import imgZoom from '@cyyjs/vue-img-zoom'

Vue.use(imgZoom)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

### 组件内引入
```js
import { imgZoomFn } from '@cyyjs/vue-img-zoom'
export default {
  name: 'components',
  directives: {
    locallyImgZoom: {
      inserted: imgZoomFn
    }
  }
}
```

## 绑定指令
```html
<img v-img-zoom src="./assets/demo.jpg"/>
```

或指定配置

```html
<img v-img-zoom="{min: 0.5, max: 2}" src="./assets/demo.jpg"/>
```

默认值：
```js
{
  min: 0.1, // 最小缩放比
  max: 5 // 最大缩放比
}
```
