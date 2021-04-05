const html = `<!DOCTYPE html>
<html lang="zh"><head><link rel="icon" href="https://img.typeboom.com/extreme.png">
<!-- 用户条款TOS：https://img.typeboom.com/Typeboom_START/TOS.html -->
<meta name="keywords" content="Fuckbaidu, 浏览器主页, 主页, typeboom start, 搜索, homepage, browser homepage">
<meta name="description" content="Just a simple browser homepage, clean and ad-free">
<script type="”text/javascript”">
</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- MDUI CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css"
  integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw"
  crossorigin="anonymous"
/>
<!-- MDUI JavaScript -->
<script
  src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"
  integrity="sha384-gCMZcshYKOGRX9r6wbDrvF+TcCCswSHFucUzUPwka+Gr+uHgjlYvkABr95TCOz3A"
  crossorigin="anonymous"
></script>
<title>Typeboom START</title>

    <link rel="stylesheet" href="https://img.typeboom.com/Typeboom_START/style.css">
<body>
<div id="body">

<div class="search">
<div class="logo">
<img src="https://img.typeboom.com/Typeboom_START_LOGO_done.png" width="120" style="position:relative;top:-15px;">
</div>

<form id="search_form" onsubmit="return search()">

<div class="import">
<input id="search_input" class="search" type="text" value="" onkeyup="get_suggest()" onfocus="get_suggest()" onpaste="get_suggest()" autocomplete="off" placeholder="search something...">
<input type="submit" id="search_submit" value="→">

</div></form>
<div class="label">
<div class="box">
<a href="https://www.typeboom.com/"></a>
<img class="icon" src="https://img.typeboom.com/Logo.svg">
</div>
<div class="box">
<a href="https://drive.typeboom.club/"></a>
<img class="icon" src="https://img.typeboom.com/Drive.png">
</div>
<div class="box">
<a href="https://www.bilibili.com/" rel="nofollow"></a>
<img class="icon" src="https://img.typeboom.com/ico/bilibilibog.png">
</div>
<div class="box">
<a href="https://youtube.com/" rel="nofollow"></a>
<img class="icon" src="https://img.typeboom.com/ico/youtube.png">
</div><a target="_blank" href="https://www.typeboom.com/START-pic.html" class="mdui-list-item mdui-ripple" data-pjax-state="" id="fixedbutton"><i class="mdui-list-item-icon mdui-icon material-icons">history</i>
      <!--<div class="mdui-list-item-content">这里可以加文字，加完删除旁边的注释符号即可（效果不好</div>-->
    </a>
<div class="box">

<script type="text/javascript" src="https://img.typeboom.com/ico/demo.js"></script>
        </div></div></div></div></body></html>`

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

