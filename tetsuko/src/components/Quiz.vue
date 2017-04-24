<template>
  <div class="top">
    <div class='bgmovie'>
<!--    	<iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/iS8jKACWPuw?autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1&loop=1"></iframe> -->
    </div>

    <div class="container">
    {{ questions }}<br>
    {{ question }}<br>
    {{ questionIndex + 1 }} / {{ questions.length }}
     </div>
     </div>
</template>

<script>
export default {
  data () {
    return {
      questions: {},
      question: {
        problem: '',
        answer: ''
      },
      choices: [],
      checkedChoices: [],
      isCorrect: false,
	    isAnswerButtonDisabled: true,
      answerOpen: false,
      questionOpen: true,
      endOpen: false,
      questionIndex: 0,
      correctNum: 0,
      shuffledArr: []
    }
  },
    methods: {
      // 回答する
      answerQuiz: function () {
        // 項目を未選択の場合進まない
        if (this.checkedChoices.length === 0) return;
        // 正解を開き正誤の結果を表示する
        this.answerOpen = true;
        this.isAnswerButtonDisabled = true;
        this.isCorrect = compareArr(this.checkedChoices, this.question.corrects);
        if (this.isCorrect) this.correctNum++;
      },
      // 次の問題へ
      nextQuiz: function () {
        this.answerOpen = false;
        this.questionIndex++;

        // questionIndex + 1と問題総数が一緒の場合、終わりページを開く
        if (this.questionIndex === this.questions.length) {
          this.questionIndex = this.questions.length;
          this.questionOpen = false;
          this.endOpen = true;
          window.scrollTo(0,0);
        } else {

          // questionに次の問題をセットする
          this.question = this.questions[this.shuffledArr[this.questionIndex]];
          // 選択肢を生成する correctsとincorrectsを繋げシャッフル
          this.choices = _.shuffle(_.concat(this.question.corrects, this.question.incorrects));
          this.checkedChoices = [];
          window.scrollTo(0,0);
        }
      },
    
      // 初期化処理
      initializeApp: function () {

        console.log('init')

        var questions = [
          {
            "id": "0001",
            "text": "算数の問題です。1 + 1 = ?",
            "corrects": [
              "2"
            ]
          },
          {
            "id": "0002",
            "text": "22222222222222",
            "corrects": [
              "1"
            ]
          }
        ]

          console.log('init vars');
          // 変数の初期化
          this.questionIndex = 1;
          this.correctNum = 0;
          this.isCorrect = false;
          this.answerOpen = false;
          this.questionOpen = true;
          this.endOpen = false;
          this.checkedChoices = [];

          //  問題の取得
          this.questions = questions;
//          console.log(this.questions);

          // // 問題をランダムに並べた配列を作成する
          var questionsNum = this.questions.length;
          // // console.log(this.questions.length);
          console.log(this.questions[1]);

          // var arr = [];
          //    for (var i = 0; i < questionsNum; i++) {
          //     arr[i] = i;
          // }

          //   var randomIndex;
          //   for (var i = 0; i < questionsNum; i++) {
          //     randomIndex = Math.floor(Math.random() * arr.length);
          //     this.shuffledArr[i] = arr[randomIndex];
          //     arr.splice(randomIndex, 1);
          //   }

          //   // questionにquestionsの1問目を設定する
          //   this.question = this.questions[this.shuffledArr[this.questionIndex]];
          //   // console.log(this.question);

          //   // 選択肢を生成する correctsとincorrectsを繋げシャッフル
          //   // this.choices = _.shuffle(_.concat(this.question.corrects, this.question.incorrects));

    },
    // 画面生成後実行されるメソッド
    clear () {
      this.msg = ''
    },
    next () {
      this.questionIndex++;
    },
    prev () {
      this.questionIndex--;
    }
  },
  mounted () {
    this.initializeApp();
  }
}
</script>

<style>
h2 {
  color: #fff;
  background-color: #000;
}
container {
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
  color: #fff;
  background-color: #000;
}
</style>
