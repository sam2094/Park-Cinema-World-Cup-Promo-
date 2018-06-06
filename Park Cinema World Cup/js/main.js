// Mobile Area

$(function () {
    $('#menu').slicknav({
        appendTo: '.header-logo',
        label: '<i class="fas fa-bars"></i>',
    });
});
// Scrollers
$('#scroller-up').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});

$('#scroller-down').click(function (event) {
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({ scrollTop: n }, 1500);
});