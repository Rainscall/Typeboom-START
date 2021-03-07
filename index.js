const html = `<!DOCTYPE html>
<html lang="zh">
<link rel="icon" href="https://img.typeboom.club/extreme.png">
<!-- 此站点与曾经出现过的fuckbaidu.vip和fuckbaidu.com无关，同时也与微软公司的bing无关 -->
<!-- 祝李彦宏下次被泼硫酸 -->
<head>
<meta name="keywords" content="Fuckbaidu, 浏览器主页, 主页, typeboom start, 搜索">
<meta name="description" content="百度就是个垃圾!">
<script type="text/javascript">
<!--
var isMobile = function() {
   //console.log("Navigator: " + navigator.userAgent);
   return /(iphone|ipod|ipad|android|blackberry|windows ce|palm|symbian)/i.test(navigator.userAgent);
 };
 if(isMobile()) {
       window.location.href = "https://start-m.typeboom.club/";
}
//-->
</script>
<!-- 上面是跳转手机版页面 -->
<script type=”text/javascript”>
</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Typeboom START</title>

<style type="text/css">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: url('https://bingpic.ashes233.ml/bingpic.php') no-repeat;
    background-size: 100%;
    background-position: 0px -30px;
    background-color: #ffffff;
    font-size: 13px;
}

#body {
    margin-top: 155px;
}

#body .search {
    /* border: 1px solid red; */
    width: 100%;
    padding: 10px 0;
    z-index: 5;
}

#body .search div.logo {
    /* border: 1px solid red; */
    width: 100%;
    height: 57px;
    text-align: center;
}

#body .search form#search_form {
    /* border: 1px solid red; */
    position: relative;
    display: block;
    width: 85%;
    height: 40px;
    -webkit-animation: fadeIn 2.5s;
    animation: fadeIn 2.5s;
    border-radius: 8px;
    margin: 10px auto;
}

#body .search form#search_form div.import {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
}




#body .search form#search_form div.import>#search_input {
    border-radius: 50px;
    outline: none;
    padding: 0 40px 0 15px;
    font-size: 14px;
    width: 100%;
    height: 40px;
    color: #00000;
    border: none;
    font-size: 13px;
}

#body .search form#search_form div.import>#search_submit {
    position: absolute;
    background-color: transparent;
    display: block;
    outline: none;
    border: none;
    top: 0;
    right: 0;
    height: 40px;
    width: 40px;
    font-size: 18px;
    color: #00000;
}

#suggest {
    position: absolute;
    left: -1px;
    right: -1px;
    top: 40px;
    border: 1px solid #ccc;
    background: #fff;
    line-height: 40px;
    z-index: 5;
}

#suggest ul {
    padding-left: 27px;
}

#suggest ul>li {
    border-bottom: 1px solid #ccc;
    text-align: left;
    padding-left: 10px;
}

#suggest ul>li:active {
    background: #F0F0F0;
}

#suggest ul>li b {
    float: right;
    width: 44px;
    height: 40px;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAI5JREFUSEtjZCACLF261J6RkbELpPT///9l0dHRB4nQRlgJ0ODny5Yt+w/CIDZhHUSqgBkKo4nURljZqMHwMBohQQFK/ECvnkT3LgX8kyAzGZATPwWGgTMPSiYCGvyEWgYiGfyEAcjxoKaroWZ5EM52QBUjJLkRExajQUH7Qgg5E4HYxMQLUWpgmYiUxA8AOdLMz+iDKvIAAAAASUVORK5CYII=') no-repeat scroll center center #fff;
    background-size: 11px;
}

#suggest .close {
    text-align: right;
    font-size: 14px;
    color: #888;
    padding-right: 12px;
}



#body .label {
    /* border: 1px solid red; */
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10px;
    font-size: 10px;
}


#body .label::after {
    display: block;
    content: "";
    clear: both;
}

#body .label div.box {
    /* border: 1px solid red; */
    box-sizing: content-box;
    position: relative;
    float: left;
    -webkit-animation: fadeInDown 1s;
    animation: fadeInDown 1s;
    padding: 5px 10px 0 10px;
    text-align: center;
    width: 45px;
    height: 74px;
    margin: 2px;
}

#body .label div.box>.icon {
    display: block;
    width: 40px;
    height: 40px;
}

#body .label div.box>a {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 5;
}

#body .label div.box>p {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 65px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    line-height: 25px;
    font-size: 12px;
}



#body .lwlhitokoto {
    width: 100%;
    height: 100%;
}

#body .lwlhitokoto span {
    /* border: 1px solid red; */
    display: block;
    line-height: 25px;
    text-align: center;
    color: #999;
    font-size: 20px;
}

#body .lwlhitokoto>p {
    /* border: 1px solid red; */
    padding: 5px;
    text-align: center;
    color: #999;
    font-size: 12px;
}


@-webkit-keyframes flipInX {
    0% {
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
        opacity: 0
    }
    40% {
        -webkit-transform: perspective(400px) rotateX(-10deg);
        transform: perspective(400px) rotateX(-10deg)
    }
    70% {
        -webkit-transform: perspective(400px) rotateX(10deg);
        transform: perspective(400px) rotateX(10deg)
    }
    100% {
        -webkit-transform: perspective(400px) rotateX(0);
        transform: perspective(400px) rotateX(0);
        opacity: 1
    }
}

@keyframes flipInX {
    0% {
        -webkit-transform: perspective(400px) rotateX(90deg);
        -ms-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
        opacity: 0
    }
    40% {
        -webkit-transform: perspective(400px) rotateX(-10deg);
        -ms-transform: perspective(400px) rotateX(-10deg);
        transform: perspective(400px) rotateX(-10deg)
    }
    70% {
        -webkit-transform: perspective(400px) rotateX(10deg);
        -ms-transform: perspective(400px) rotateX(10deg);
        transform: perspective(400px) rotateX(10deg)
    }
    100% {
        -webkit-transform: perspective(400px) rotateX(0);
        -ms-transform: perspective(400px) rotateX(0);
        transform: perspective(400px) rotateX(0);
        opacity: 1
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
}

@-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px)
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translateY(-20px);
        -ms-transform: translateY(-20px);
        transform: translateY(-20px)
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0)
    }
}
</style>
</head>
<body>
<div id="body">

<div class="search">
<div class="logo">
<img src="data:image/png;base64,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" width="120" style="position:relative;top:-40px;">
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
<img class="icon" src="https://img.typeboom.club/Logo.svg">
</div>
<div class="box">
<a href="https://drive.typeboom.club/"></a>
<img class="icon" src="https://img.typeboom.club/Drive.png">
</div>
<div class="box">
<a href="https://www.bilibili.com/" rel="nofollow"></a>
<img class="icon" src="https://img.typeboom.club/ico/bilibilibog.png">
</div>
<div class="box">
<a href="https://youtube.com/" rel="nofollow"></a>
<img class="icon" src="https://img.typeboom.club/ico/youtube.png">
</div>
<div class="box">

<script type="text/javascript" src="https://img.typeboom.club/ico/demo.js"></script>
</body>
<!-- 修复了语法问题 -->
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

