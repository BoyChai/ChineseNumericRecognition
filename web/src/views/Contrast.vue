<template>
<div>实时对比</div>
  <vueVideoPlayer h="400px" w="700px" url="http://localhost:8080/hdl/live/test.flv"></vueVideoPlayer>
  <vueVideoPlayer  url="http://localhost:8080/hdl/live/test.flv"></vueVideoPlayer>


</template>

<script>
import vueVideoPlayer from "@/components/vueVideoPlayer.vue";

export default {
  name: "Contrast",
  components: {
    vueVideoPlayer,
  },
}
</script>

<style scoped>

</style>