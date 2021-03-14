const html = `<!DOCTYPE html>
<html lang="zh">
<link rel="icon" href="https://img.typeboom.club/extreme.png">
<!-- zh-CN：此站点与曾经出现过的fuckbaidu.vip和fuckbaidu.com无关。
这是一个个人网站，内容存放在CloudFlare Workers，搜索窗口跳转https://cn.bing.com/ 。
本网站的所有内容均保留权利。如果你对任何内容感到不适，请立即退出本站域名下的任何页面。
本网站从未有意冒充任何官网或者官方内容。页面内部分资源来源于网络，如果您认为这里的任何内容侵犯了您或贵组织/单位的任何正当权利，请联系我：admin@typeboom.club。
网站非商业运营，但是如果发生侵权，也不会给予任何补偿或道歉仅会删除侵权内容
背景图像来自必应
此条款适用于下列三个网站
https://start.typeboom.club/
https://fuckbaidu.xyz/
https://www.fuckbaidu.xyz/
使用则代表同意此条款
 -->
<!-- en-US
 This site is not related to fuckbaidu.vip and fuckbaidu.com which have appeared before.
This is a personal website with content hosted at CloudFlare Workers and a search window jumping to https://cn.bing.com/ .
All content on this site is subject to copyright. If you are uncomfortable with any of the content, please exit any page under the domain name of this site immediately.
This site is not intended to impersonate any official website or official content. Some of the resources within the pages are sourced from the internet and if you believe that any of the content here infringes any legitimate rights of you or your organisation/unit, please contact me at admin@typeboom.club.
The site is not a commercial operation, but no compensation or apology will be given in the event of infringement, only the removal of the infringing content.
Background image from Bing
This applies to the following three websites
https://start.typeboom.club/
https://fuckbaidu.xyz/
https://www.fuckbaidu.xyz/
By using this site, you agree to the terms and conditions
 -->
<!-- 祝李彦宏下次被泼硫酸，当然还有张小龙 -->
<head>
<meta name="keywords" content="Fuckbaidu, 浏览器主页, 主页, typeboom start, 搜索, homepage, browser homepage">
<meta name="description" content="Just a simple browser homepage, clean and ad-free">
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
/*    box-shadow: 0 0 5px rgba(70, 70, 40, .255); */
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
<img src="https://img.typeboom.club/Typeboom_START_LOGO_done.png" width="120" style="position:relative;top:-15px;">
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

