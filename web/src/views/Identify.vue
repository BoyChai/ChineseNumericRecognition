<template>
  <div>
    实时识别
  </div>
  <vueVideoPlayer w="1200px" h="600px" url="http://server.boychai.xyz:8080/hdl/live/test.flv"></vueVideoPlayer>

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