{
    {
        var last_kw = '';
        var max_sug_len = 99;//最短搜索建议触发字数
        function get_suggest() {
            var kw = document.getElementById('search_input').value;
            var clear = document.getElementById('clear');
            if (kw) clear.style.display = 'block';
            else clear.style.display = 'none';
            if (kw == last_kw) return;
            last_kw = kw;
            if (!kw || kw.length < max_sug_len) {
                close_sug();
                return;
            }
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://cn.bing.com/search?q=' + encodeURIComponent(kw) + '&_=' + new Date().getTime() + '&callback=jsonp3';
            var head = document.querySelector('head');
            script.onload = function() {
                head.removeChild(script);
            };
            head.appendChild(script);
        }
        //以后可能会做搜索建议？

        function jsonp3(res) {
            var suggest = document.getElementById('suggest');
            if (!res.r || !res.r.length) {
                suggest.style.display = 'none';
                return;
            }
            var html = '';
            res.r.forEach(function(v) {
                html += '<li>' + v.w + '<b></b></li>';
            });
            document.getElementById('suglist').innerHTML = html;
            suggest.style.display = 'block';
        }

        function close_sug() {
            last_kw = '';
            document.getElementById('suggest').style.display = 'none';
        }

        function move_input() {
            document.body.scrollTop = document.getElementById('search_form').offsetTop - 2;
        }

        function clear_seach() {
            var input = document.getElementById('search_input');
            input.value = '';
            document.getElementById('clear').style.display = 'none';
            close_sug();
            input.focus();
        }

        function search() {
            if (document.getElementById("search_input").value != "") {
                window.location.href = "https://cn.bing.com/search?q=" + encodeURIComponent(document.getElementById("search_input").value) + "&uc_param_str=dnntnwvepffrgibijbprsvdsme&from=ucframe&uc_sm=1";
                document.getElementById("search_input").value = "";
            }
            return false;
        }

        document.getElementById('suglist').addEventListener('click', function(e) {
            var input = document.getElementById('search_input');
            if (e.target.tagName == 'B') {
                input.value = e.target.parentNode.firstChild.textContent;
                input.focus();
            } else if (e.target.tagName == 'LI') {
                input.value = e.target.firstChild.textContent;
                close_sug();
                search();
            }
        });
        window.addEventListener('resize', move_input);
    }
}