<template>
<!--  <video-->
<!--      style=":height: h;:width: w;"-->

  <video
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
      'url',
      'h',
      'w',
  ],
  data() {
    return {
      flvPlayer: null
    }
  },
  methods: {
    //创建flv视频实例
    createFlv() {
      console.log(this.h)
      console.log(this.w)
      document.getElementById("videoElement").style.height=this.h;
      document.getElementById("videoElement").style.width=this.w;
      let url=this.url;
      if (flvjs.isSupported()) {
        let videoElement = document.getElementById("videoElement");
        this.flvPlayer = flvjs.createPlayer({
          type: "flv",
          isLive: true,
          hasAudio: false,
          url
        });
        this.flvPlayer.on(flvjs.Events.LOADING_ERROR, (err) => {
          console.error('FLV 文件加载错误：', err);
        });
        this.flvPlayer.on(flvjs.Events.ERROR, (errorType, data) => {
          console.error('flv.js 错误：', errorType, data);
        });
        this.flvPlayer.attachMediaElement(videoElement);
        this.flvPlayer.load();
        try {
          setTimeout(()=>{
            this.flvPlayer.play();
          },60000)
        }catch (e) {
          console.log("播放超时",+e)
        }
      }
    }
  },
  beforeDestroy() {
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