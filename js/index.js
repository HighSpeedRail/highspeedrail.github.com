var $input = $('.topInfo .search input');
window.onload = function () {
    $input.css('transition', '1s');
};
$('.nav-list li:nth-child(1)').on('click', function () {
    var agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'],
        len = agents.length;
    for (var i = 0; i < len; i++) {
        if (navigator.userAgent.indexOf(agents[i]) !== -1) {
            window.open('resume/index.html');
            return;
        }
        if (i == len - 1) {
            alert('请在移动端查看');
        }
    }
});