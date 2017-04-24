<template>
  <div class="top">
    <div class='bgmovie'>
        <youtube :video-id="videoId" :mute=true player-width="1280" player-height="750" :player-vars="{ autoplay: 1, showinfo: 0, controls: 0 }"></youtube>
    </div>
      <img src="./../assets/text.png"><br>
      <img src="./../assets/logo.png"><br>
      <button type="button"onclick="location.href='quiz'">
        <img src="./../assets/start_button.png">
      </button>
aaaaaaaaaaaaaaa      aaaaaaaaaaaa
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoId: 'iS8jKACWPuw',
      msg: 'Hello World!'
    }
  },
  methods: {
    clear () {
      this.msg = ''
    }
  }
}
</script>

<style>
.top {
  position: fixed;
  z-index: -99;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #000;
}
.bgmovie {
  position: fixed;
  z-index: -99;
  width: 100%;
  height: 100%;
}
</style>
