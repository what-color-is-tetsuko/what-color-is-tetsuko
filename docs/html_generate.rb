#!/usr/bin/env ruby

c = Hash.new { |h,k| h[k] = {} }

c[0]['shiro'] = [ '白', 'pic.twitter.com/B8y9qZz2Tv']
c[1]['aka']   = [ '赤', 'pic.twitter.com/RtV8Lxx7iB']
c[2]['ao']    = [ '青', 'pic.twitter.com/t2nEFlph7z']
c[3]['momo']  = [ '桃', 'pic.twitter.com/emkKAJI0pB']
c[4]['gure']  = [ 'グレ', 'pic.twitter.com/TjIaw7hwHW']
c[5]['hobo']  = [ 'ほぼ', 'pic.twitter.com/mw5EflfP7e']
c[6]['kuro']  = [ '黒', 'pic.twitter.com/RGGGxh042h']

def html(n, roma, nihon)

file_path = "/Users/kenjiskywalker/source/src/bitbucket.org/kenjiskywalker/what-color-tetsuko-is/docs/#{roma}.html"
json = <<"EOS"
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>黒柳テスト</title>
    <meta property="og:url" content="http://quiz.what-color-is-tetsuko.xyz/" />
    <meta property="og:type" content="artcle" />
    <meta property="og:title" content="黒柳テスト" />
    <meta property="og:description" content="わたしは「#{nihon[0]}柳徹子」でした" />
    <meta property="og:image" content="https://raw.githubusercontent.com/what-color-is-tetsuko/what-color-is-tetsuko/master/docs/assets/#{roma}yanagi.png"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>
    <script src="./app.js"></script>
    <script src="https://www.youtube.com/iframe_api"></script>
    <link rel="stylesheet" type="text/css" href="./app.css">
</head>

<body>
    <div class="overlay">
        <div id="app">
            <div class="resultBackground">
                <div class="resultContents">
                    <div class="rightBox">
                        <img src="./assets/#{roma}yanagi.png">
                    </div>
                    <div class="leftBox">
                        <h2 class="resultText"> #{n}問正解なので<br>あなたは<span class="#{roma}yanagi">「#{nihon[0]}柳徹子」</span><br/>でした</h2>
                    </div>
                    <div class="leftBox">
                        <button class="button is-primary" onclick="location.href='quiz.html'"><img src="./assets/button_retry.png"></button>
                    </div>
                </div>
                <div class="sns">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=http://quiz.what-color-is-tetsuko.xyz/#{roma}.html" target="_blank" title="Facebookでシェア"><img src="./assets/button_facebook.png" alt="facebook"></a>
                    <a href="https://twitter.com/intent/tweet?text=わたしは #{n}問正解 でしたので「#{nihon[0]}柳徹子」でした。%0A%0A%23黒柳テスト%0Ahttp://quiz.what-color-is-tetsuko.xyz/#{roma}.html%0A#{nihon[1]}"
                        target="_blank" title="Twitterでシェア"><img src="./assets/button_twitter.png" alt="twitter"></a>
                    <a href="http://line.me/R/msg/text/?わたしは #{n}問正解で%0A「#{nihon[0]}柳徹子」でした%0A%0A黒柳テスト%0Ahttp://quiz.what-color-is-tetsuko.xyz/#{roma}.html" target="_blank"
                        title="LINEに送る"><img src="./assets/button_LINE.png" alt="LINE"></a>
                </div>
            </div>
        </div>
    </div>

</body>

</html>
EOS

File.open(file_path,"w") do |file|
  file.puts json
end

end

c.each do |n, v|
  v.each do |roma, nihon|
    puts html(n, roma, nihon)
  end
end



