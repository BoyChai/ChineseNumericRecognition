<template>
  <div>实时对比</div>
  <video id="videoElement1" controls muted ></video>
  <video id="videoElement2" controls muted ></video>

</template>

<script>
import flvjs from 'flv.js'
export default {
  name: "test",
  data() {
    return {
      flvPlayer1: null,
      flvPlayer2: null,
    }
  },
  methods: {
    video1() {
      document.getElementById("videoElement1").style.height='400px';
      document.getElementById("videoElement1").style.width='700px';
      if (flvjs.isSupported()) {
        let videoElement = document.getElementById("videoElement1");
        this.flvPlayer1 = flvjs.createPlayer({
          type: "flv",
          isLive: true,
          hasAudio: false,
          url: 'http://server.boychai.xyz:8080/hdl/live/test.flv'
        });
        this.flvPlayer1.on(flvjs.Events.LOADING_ERROR, (err) => {
          console.error('FLV 文件加载错误：', err);
        });
        this.flvPlayer1.on(flvjs.Events.ERROR, (errorType, data) => {
          console.error('flv.js 错误：', errorType, data);
        });
        this.flvPlayer1.attachMediaElement(videoElement);
        this.flvPlayer1.load();
        try {
          setTimeout(()=>{
            this.flvPlayer1.play();
          },60000)
        }catch (e) {
          console.log("播放超时",+e)
        }
      }
    },
    video2() {
      document.getElementById("videoElement2").style.height='150px';
      document.getElementById("videoElement2").style.width='300px';
      if (flvjs.isSupported()) {
        let videoElement = document.getElementById("videoElement2");
        this.flvPlayer2 = flvjs.createPlayer({
          type: "flv",
          isLive: true,
          hasAudio: false,
          url: 'http://server.boychai.xyz:8080/hdl/live/test.flv'
        });
        this.flvPlayer2.on(flvjs.Events.LOADING_ERROR, (err) => {
          console.error('FLV 文件加载错误：', err);
        });
        this.flvPlayer2.on(flvjs.Events.ERROR, (errorType, data) => {
          console.error('flv.js 错误：', errorType, data);
        });
        this.flvPlayer2.attachMediaElement(videoElement);
        this.flvPlayer2.load();
        try {
          setTimeout(()=>{
            this.flvPlayer2.play();
          },60000)
        }catch (e) {
          console.log("播放超时",+e)
        }
      }
    }
  },
  mounted() {
    this.video1()
    this.video2()
  },
  beforeDestroy() {
    if (this.flvPlayer1) {
      this.flvPlayer1.pause()
      this.flvPlayer1.unload()
      this.flvPlayer1.detachMediaElement()
      this.flvPlayer1.destroy()
      this.flvPlayer1 = null
    }
    if (this.flvPlayer2) {
      this.flvPlayer2.pause()
      this.flvPlayer2.unload()
      this.flvPlayer2.detachMediaElement()
      this.flvPlayer2.destroy()
      this.flvPlayer2 = null
    }
  },
}
</script>

<style scoped>

</style>