<template>
  <div class="top">
    <div class='bgmovie'>
<!--    	<iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/iS8jKACWPuw?autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1&loop=1"></iframe> -->
    </div>

    <div class="container">
          <div v-if="questionOpen">
          <p v-html="question.text"></p>
          <p v-model="question.reference"></p>
          <ul>
            <li v-for="choice in choices">
                      <!--

              <input type="checkbox" :id="choice" :value="choice" v-model="checkedChoices" :disabled="answerOpen">{{ choice }}
              !-->
              <button                :id="choice" :value="choice" v-model="checkedChoices" v-on:click="answerQuiz(choice)">{{ choice }}</button>
              
            </li>
          </ul>
                    <!--

        <p>選択: {{ checkedChoices }}</p>
                    <button v-on:click="answerQuiz" class="button is-primary" :disabled="answerOpen || checkedChoices.length === 0">回答</button>
                    !-->
        </div>

        <div v-if="answerOpen" transition="fade">
          <!--
          <h1>解答</h1>
          <button v-if="isCorrect" id="correct" class="button is-info"> O </button>
          <button v-else id="wrong" class="button is-danger"> X </button>
          <h3>正解は：<span v-for="correct in question.corrects">{{ correct }} </span></h3>
          <p v-html="question.answer"></p>
          !-->
          <button class="button is-primary" v-on:click="nextQuiz">次の問題</button>
        </div>

        <div v-if="endOpen" transition="fade">
          <h1>あなたは {{ yanagi[correctNum] }}柳</h1>
          <h2>正答数： {{ correctNum }} out of {{ questionIndex }}</h2>
          <button class="button is-primary" v-on:click="initializeApp">もう１度！</button>
        </div>
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
      shuffledArr: [],
      yanagi: {}
    }
  },
    methods: {
      // 回答する
      answerQuiz: function (answer) {
        console.log('a');
        console.log(answer);
        console.log(this.question.corrects[0]);
        console.log('b');

        // 項目を未選択の場合進まない
        // if (this.checkedChoices.length === 0) return;
        // 正解を開き正誤の結果を表示する
        this.answerOpen = true;
        this.isAnswerButtonDisabled = true;
        this.isCorrect = this.compareArr(answer, this.question.corrects[0]);
        if (this.isCorrect) this.correctNum++;
      },
      // 次の問題へ
      nextQuiz: function () {
        this.answerOpen = false;
        this.questionIndex++;

        // questionIndex + 1と問題総数が一緒の場合、終わりページを開く
        if (this.questionIndex === (this.questions.length + 1) ) {
          this.questionIndex = this.questions.length;
          this.questionOpen = false;
          this.endOpen = true;
          window.scrollTo(0,0);
        } else {
          // questionに次の問題をセットする
          var n = this.questionIndex - 1
          this.question = this.questions[n];
      
          // 選択肢を生成する correctsとincorrectsを繋げシャッフル

          var arr = this.question.incorrects;
          arr.push(this.question.corrects[0]);
          this.choices = arr;

          this.checkedChoices = [];
          window.scrollTo(0,0);
        }
      },
    
      // 初期化処理
      initializeApp: function () {

        console.log('init')

        var yanagi = 
          {
            "0": "白",
            "1": "ほぼ",
            "2": "黒",
          }

        var questions = [
          {
            "id": "0001",
            "text": "徹子の年齢は？",
            "corrects": [
              "110歳"
            ],
            "incorrects": [
              "120歳",
              "1130歳"
            ],
            "answer": "よく考えましょう"
          },
          {
            "id": "0002",
            "text": "柳てつこ？",
            "corrects": [
              "黒"
            ],
            "incorrects": [
              "白",
              "ほぼ",
              "赤"
            ],
            "answer": "Black!!!!!!!!"
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


          this.yanagi = yanagi;

          //  問題の取得
          this.questions = questions;

          // // 問題をランダムに並べた配列を作成する
          var questionsNum = this.questions.length;     
          var arr = [];
             for (var i = 0; i < questionsNum; i++) {
              arr[i] = i;
          }

            // questionにquestionsの1問目を設定する
            this.question = this.questions[0];
     
            // 選択肢を生成する correctsとincorrectsを繋げシャッフル
            
            // TODO: https://lodash.com/ 使っていい感じにする
            var arr = this.question.incorrects;
            arr.push(this.question.corrects[0]);
            this.choices = arr;

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
    },
    compareArr: function (arr1, arr2) {
      
      // 解答数と回答数が異なる場合false
      if (arr1.length !== arr2.length) {
        return false;
      }

      // 解答と回答の内容が異なる場合false
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
  },
  mounted () {
    this.initializeApp();
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
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
