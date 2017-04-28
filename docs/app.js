//
// 見ちゃダメ...
// 
function onYouTubeIframeAPIReady () {
  ytPlayer = new YT.Player(
    'player', // 埋め込む場所の指定
    {
      videoId: 'iS8jKACWPuw', // YouTubeのID
      playerVars: {
        loop: 1,
        playlist: 'iS8jKACWPuw',
        controls: 0,
        autoplay: 1,
        showinfo: 0,
        playsinline: 1
      },
      events: {
        'onReady': onPlayerReady
      }
    }
  )
}

console.log('あなたはジャバスク柳？')

// プレイ準備完了後
function onPlayerReady (event) {
  event.target.mute()
  event.target.playVideo()
}

(function (i, s, o, g, r, a, m) {i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)}, i[r].l = 1 * new Date();a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

ga('create', 'UA-37377904-2', 'auto')
ga('send', 'pageview')
