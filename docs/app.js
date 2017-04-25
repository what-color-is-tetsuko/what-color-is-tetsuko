new Vue({
  el: '#app',
  // データ
  data: {
    msg: 'Hello'
  }
})

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
