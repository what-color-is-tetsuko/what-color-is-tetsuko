<template>
  <div class="top">
      <img src="./assets/text.png"><br>
      <img src="./assets/logo.png"><br>
      <button type="button"onclick="location.href='quiz'">
        <img src="./assets/start_button.png">
      </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
#top {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #fff;
}
</style>
