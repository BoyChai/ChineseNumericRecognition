<template>
  <video
      style="height: 400px;width: 600px;"
      id="videoElement"
      ref="videoElement"
      controls
      muted
  ></video>
<!--  <button type="button" @click="createFlv">start</button>-->
</template>
<script>
import flvjs from 'flv.js'
export default  {
  props:[
      'url'
  ],
  data() {
    return {
      flvPlayer: null
    }
  },
  methods: {
    //创建flv视频实例
    createFlv() {
      let url=this.url;
      if (flvjs.isSupported()) {
        let videoElement = document.getElementById("videoElement");
        this.flvPlayer = flvjs.createPlayer({
          type: "flv",
          isLive: true,
          hasAudio: false,
          url
        });
        this.flvPlayer.attachMediaElement(videoElement);
        this.flvPlayer.load();
        this.flvPlayer.play();
      }
    }
  },
  beforeUnmount() {
    if (this.flvPlayer) {
      this.flvPlayer.pause()
      this.flvPlayer.unload()
      this.flvPlayer.detachMediaElement()
      this.flvPlayer.destroy()
      this.flvPlayer = null
    }
  },
  // created() {
  //   this.createFlv()
  // }
  mounted() {
    this.createFlv()
  }

}

</script>