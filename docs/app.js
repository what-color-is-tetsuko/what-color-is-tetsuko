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

(function (i, s, o, g, r, a, m) {i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)}, i[r].l = 1 * new Date();a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

ga('create', 'UA-37377904-2', 'auto')
ga('send', 'pageview')
