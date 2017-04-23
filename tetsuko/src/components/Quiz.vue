<template>
  <div class="top">
    <div class='bgmovie'>
<!--    	<iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/iS8jKACWPuw?autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1&loop=1"></iframe> -->
      <div v-for="(question, index) in questions">
              <h2>{{ question.text }}</h2>
      </div>
aaaaaaaaaaaaaaa      aaaaaaaaaaaa
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!',
      questions: [
      {
        text: "Question 1",
        responses: [
           {text: 'Wrong, too bad.'}, 
           {text: 'Right!', correct: true}, 
        ]
      }, {
        text: "Question 2",
        responses: [
           {text: 'Right answer', correct: true}, 
           {text: 'Wrong answer'}, 
        ]
      }]
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
h2 {
  color: #fff;
  background-color: #000;
}
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
