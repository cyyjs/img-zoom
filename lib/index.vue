<template>
  <img :src="src" alt="">
</template>

<script>
export default {
  name: 'imgZoom',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
