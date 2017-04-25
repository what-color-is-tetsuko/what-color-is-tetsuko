<template>
  <div class="top">
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-image: url("../assets/overlay.png");
}
.bgmovie {
  opacity: 0.9;
  position: fixed;
  z-index: -99;
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>
