const html = `<!DOCTYPE html>
<html lang="zh">
<link rel="icon" href="https://img.typeboom.club/extreme.png">
<!-- 别看了，这是无服务器架构 -->
<!-- 此站点与曾经出现过的fuckbaidu.vip和fuckbaidu.com无关，同时也与微软公司的bing无关 -->
<!-- 祝李彦宏下次被泼硫酸 -->
<head>
<meta name="keywords" content="Fuckbaidu, 浏览器主页, 主页, typeboom start, 搜索">
<meta name="description" content="百度就是个垃圾!">
<script type=”text/javascript”>
</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>typeboom start</title>
<link rel="stylesheet" href="https://img.typeboom.club/demo.css">

</head>
<body>
<div id="body">

<div class="search">
<div class="logo">
<img src="https://img.typeboom.club/Logo.png" width="120" style="position:relative;top:-40px;">
</div>

<form id="search_form" onsubmit="return search()">

<div class="import">
<input id="search_input" class="search" type="text" value="" onkeyup="get_suggest()" onfocus="get_suggest()" onpaste="get_suggest()" autocomplete="off" placeholder="search something...">
<input type="submit" id="search_submit" value="→">
</form>
</div>

<div class="label">
<div class="box">
<a href="https://typeboom.club/"></a>
<img class="icon" src="https://img.typeboom.club/extreme.png">
</div>
<div class="box">
<a href="https://transfer.typeboom.club/"></a>
<img class="icon" src="https://img.typeboom.club/ico/20201017130113.7196f4e88ecee0c19d13715413b07091.png">
</div>
<div class="box">
<a href="https://www.bilibili.com/"></a>
<img class="icon" src="https://img.typeboom.club/ico/bilibilibog.png">
</div>
<div class="box">
<a href="https://youtube.com/"></a>
<img class="icon" src="https://img.typeboom.club/ico/youtube.png">
</div>
<div class="box">

<script type="text/javascript" src="https://img.typeboom.club/ico/demo.js"></script>
</body>
<!-- 懒得修语法错误了，反正能用 -->
<!-- 和百毒的软件一个样嘛不是？ -->
        </div>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

