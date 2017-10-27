;(function ($) {
    //  dropdown
    var dropdownWrap = $('.dropdown-wrap');

    dropdownWrap.on('click', function (e) {
        e.preventDefault();
        var target = $(this).find('.dropdown-menu');
        target.slideToggle();
        $(this).toggleClass('open');
    });

})(jQuery);