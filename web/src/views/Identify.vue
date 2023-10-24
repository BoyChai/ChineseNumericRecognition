<template>
  <div>
    实时识别
  </div>
  <vueVideoPlayer url="http://localhost:8080/hdl/live/test.flv"></vueVideoPlayer>

</template>

<script>
import vueVideoPlayer from '@/components/vueVideoPlayer.vue'

export default {
  name: "Identify",
  components: {
    vueVideoPlayer,
  },
}
</script>

<style scoped>

</style>