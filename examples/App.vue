<template>
  <div id="app">
    <h3>请在移动设备上打开，并在图片上双指操作</h3>
    <h4>全局注册</h4>
    <img v-img-zoom="{min: 0.5, max: 2}" alt="Vue logo" src="./assets/demo.jpg"/>
    <h4>组件内注册</h4>
    <img v-locally-img-zoom="{min: 0.5, max: 2}" alt="Vue logo" src="./assets/demo.jpg"/>
  </div>
</template>

<script>
import { imgZoomFn } from '../lib'
export default {
  name: 'App',
  directives: {
    locallyImgZoom: {
      inserted: imgZoomFn
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  margin: auto;
  width: 100%;
  display: block;
}
</style>
