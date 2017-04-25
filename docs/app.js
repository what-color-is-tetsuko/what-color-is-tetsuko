//
// 見ちゃダメ...
// 
function onYouTubeIframeAPIReady () {
  ytPlayer = new YT.Player(
    'player', // 埋め込む場所の指定
    {
      videoId: 'iS8jKACWPuw', // YouTubeのID
      playerVars: {
        loop: 1, // 0:ループしない 1:ループする 1の場合playlist設定必須
        playlist: 'iS8jKACWPuw', // 次に流すYoutubeのID
        controls: 0, // コントローラー無し
        autoplay: 1, // オートプレイ
        showinfo: 0 // 動画タイトルなど表示しない
      },
      events: {
        'onReady': onPlayerReady
      }
    }
  )
}
// プレイ準備完了後
function onPlayerReady (event) {
  event.target.playVideo()
  event.target.mute()
}

// <body onload="onLoad();">
// で呼び出すと読み込み前の画面が出て微妙なのでhtmlにべた書きする
// function onLoad () {
//   var vm = new Vue({
//     el: '#app',
//     // データ
//     data: {
//       questions: {},
//       question: {
//         problem: '',
//         answer: ''
//       },
//       choices: [],
//       checkedChoices: [],
//       isCorrect: false,
//       isAnswerButtonDisabled: true,
//       answerOpen: false,
//       questionOpen: true,
//       endOpen: false,
//       questionIndex: 0,
//       correctNum: 0,
//       shuffledArr: [],
//       yanagi: {}
//     },
//     methods: {
//       // 回答する
//       answerQuiz: function (answer) {
//         console.log('a')
//         console.log(answer)
//         console.log(this.question.corrects[0])
//         console.log('b')

//         // 項目を未選択の場合進まない
//         // if (this.checkedChoices.length === 0) return
//         // 正解を開き正誤の結果を表示する
//         this.answerOpen = true
//         this.isAnswerButtonDisabled = true
//         this.isCorrect = this.compareArr(answer, this.question.corrects[0])
//         if (this.isCorrect) this.correctNum++

//         // nextQuizのそのまんま入れた
//         this.answerOpen = false
//         this.questionIndex++

//         // questionIndex + 1と問題総数が一緒の場合、終わりページを開く
//         if (this.questionIndex === (this.questions.length + 1)) {
//           this.questionIndex = this.questions.length
//           this.questionOpen = false
//           this.endOpen = true
//           window.scrollTo(0, 0)
//         } else {
//           // questionに次の問題をセットする
//           var n = this.questionIndex - 1
//           this.question = this.questions[n]

//           // 選択肢を生成する correctsとincorrectsを繋げシャッフル

//           var arr = this.question.incorrects
//           arr.push(this.question.corrects[0])
//           this.choices = arr

//           this.checkedChoices = []
//           window.scrollTo(0, 0)
//         }
//       },

//       initializeApp: function () {
//         console.log('init')

//         var yanagi =
//         {
//           '0': '白',
//           '1': 'ほぼ',
//           '2': '黒'
//         }

//         var questions = [
//           {
//             'id': '0001',
//             'text': '徹子の年齢は？',
//             'corrects': [
//               '110歳'
//             ],
//             'incorrects': [
//               '120歳',
//               '1130歳'
//             ]
//           },
//           {
//             'id': '0002',
//             'text': '柳てつこ？',
//             'corrects': [
//               '黒'
//             ],
//             'incorrects': [
//               '白',
//               'ほぼ',
//               '赤'
//             ]
//           }
//         ]

//         console.log('init vars')
//         // 変数の初期化
//         this.questionIndex = 1
//         this.correctNum = 0
//         this.isCorrect = false
//         this.answerOpen = false
//         this.questionOpen = true
//         this.endOpen = false
//         this.checkedChoices = []

//         this.yanagi = yanagi

//         //  問題の取得
//         this.questions = questions

//         // // 問題をランダムに並べた配列を作成する
//         var questionsNum = this.questions.length
//         var arr = []
//         for (var i = 0; i < questionsNum; i++) {
//           arr[i] = i
//         }

//         // questionにquestionsの1問目を設定する
//         this.question = this.questions[0]

//         // 選択肢を生成する correctsとincorrectsを繋げシャッフル

//         // TODO: https://lodash.com/ 使っていい感じにする
//         var arr = this.question.incorrects
//         arr.push(this.question.corrects[0])
//         this.choices = arr
//       },
//       // 画面生成後実行されるメソッド
//       clear() {
//         this.msg = ''
//       },
//       next() {
//         this.questionIndex++
//       },
//       prev() {
//         this.questionIndex--
//       },
//       compareArr: function (arr1, arr2) {

//         // 解答数と回答数が異なる場合false
//         if (arr1.length !== arr2.length) {
//           return false
//         }

//         // 解答と回答の内容が異なる場合false
//         for (var i = 0; i < arr1.length; i++) {
//           if (arr1[i] !== arr2[i]) {
//             return false
//           }
//         }
//         return true
//       }
//     },
//     mounted() {
//       this.initializeApp()
//     }
//   })
// }
