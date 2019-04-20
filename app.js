$(document).ready(function () {
    $(window).scroll(function () {
        var scrollVal = $(window).scrollTop();
        if (scrollVal >= 600) {
            $('.nav-bg').addClass('nav-add');
        }
        else {
            $('.nav-bg').removeClass('nav-add');
        }
    })
})
