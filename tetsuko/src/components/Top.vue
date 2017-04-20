<template>
    <div class="top">
    <img src="../assets/logo.png">
      <iframe frameborder="0" height="100%" width="100%" 
        src="https://youtube.com/embed/iS8jKACWPuw?autoplay=1&controls=0&showinfo=0&autohide=1">
      </iframe>
    <h1>{{ msg }}</h1>
    </div>

</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.top {
  position: fixed;
  z-index: -99;
  width: 100%;
  height: 100%;
  background-color: red;
}

.movie {
  color: red;
}
</style>
