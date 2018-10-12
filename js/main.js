$(document).ready(function () {
    $(".fa-bars").click(function () {
        $(".cat").addClass("show");
    });

    $(".fa-close").click(function () {
        $(".cat").removeClass("show");
    });
    $('html').niceScroll({
        cursorcolor:"#343467",
        cursorwidth:"6px",
        cursorfixedheight: 70
    });
// sort 
    var $filterSelect = $('#FilterSelect'),
        $sortSelect = $('#SortSelect'),
        $container = $('#Container');

    $container.mixItUp();

    $filterSelect.on('change', function () {
        $container.mixItUp('filter', this.value);
    });

    $sortSelect.on('change', function () {
        $container.mixItUp('sort', this.value);
    });

    //Start shuffle
    $('#Container').mixItUp();
    // Selected color
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    // show a quick-shop
    $(".Portfolio .box .btn").click(function () {
        $(".quick-shop").show(500);
    });
    $(".Portfolio .box .btn").click(function () {
        $('.overlay').css({
            overflow: 'hidden',
            display: 'block'
        });
    });

    $(".quick-shop .icon i").click(function () {
        $(".quick-shop").hide(500);
    });
    $(".quick-shop .icon i").click(function () {
        $('.overlay').css({
            overflow: 'hidden',
            display: 'none'
        });
    });
});