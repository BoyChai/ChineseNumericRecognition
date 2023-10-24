<template>
  <div>页面导航</div>
  <vueVideoPlayer  w="1200px" h="600px" url="http://localhost:8080/hdl/live/test.flv"></vueVideoPlayer>

</template>

<script>
import vueVideoPlayer from '@/components/vueVideoPlayer.vue'

export default {
  name: "Original",
  components: {
    vueVideoPlayer,
  },

}
</script>

<style scoped>

</style>