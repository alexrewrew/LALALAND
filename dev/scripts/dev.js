(($) => {
    "use strict";

    const DOMs = {

        documentBodyHtml : $('html, body'),
        documentBody : $('body'),

        menuTrigger : $('#menu-trigger'),

        selectChosen : $(".chosen-select"),
        selectSelect2 : $('.select2-select'),

        sliderFull : $('.slider-full'),

        linkSmooth : $(".smooth"),

        cameraTooltipClose : $('.nav-widgets__camera__tooltip_close'),
        cameraTooltip : $('.nav-widgets__camera__tooltip'),

        sliderDiscount : $('.slider-discount'),

        angleLeft : '<div class="arrow left"><svg width="16px" height="25px" viewBox="0 0 16 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Головна" transform="translate(-575.000000, -638.000000)" fill="#064778" stroke="#064778"> <g id="Group-28" transform="translate(256.000000, 516.000000)"> <g id="Акция-3"> <path d="M323.797542,134.05049 L334,144.252947 L332.019182,146.233765 L320,134.214583 L320.155108,134.059474 L320.114817,134.019182 L332.133999,122 L333.991015,123.857017 L323.797542,134.05049 Z" id="Combined-Shape-Copy"></path> </g> </g> </g> </g></svg></div>',
        angleRight : '<div class="arrow right"><svg width="16px" height="25px" viewBox="0 0 16 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Головна" transform="translate(-620.000000, -638.000000)" fill="#064778" stroke="#064778"> <g id="Group-28" transform="translate(256.000000, 516.000000)"> <g id="Акция-3"> <path d="M378.844892,134.059474 L379,134.214583 L366.980818,146.233765 L365,144.252947 L375.202458,134.05049 L365.008985,123.857017 L366.866001,122 L378.885183,134.019182 L378.844892,134.059474 Z" id="Combined-Shape-Copy-2"></path> </g> </g> </g> </g></svg></div>',
    };

    $(document).ready(() => {

        // CAMERA
        DOMs.cameraTooltipClose.click(function () {
           DOMs.cameraTooltip.hide();
        });


        // ========== MENU ==========

        DOMs.menuTrigger.click((e) => {
            e.preventDefault();
            DOMs.documentBodyHtml.toggleClass('open');
        });

        // ========== SELECT ==========

        // ----- CHOSEN -----
        // DOMs.selectChosen.chosen({
        //     disable_search_threshold: 4,
        //     no_results_text: "Нічого не знайдено"
        // });

        // ----- SELECT2 -----
        // DOMs.selectSelect2.select2({
        //     placeholder: "Choose...",
        //     allowClear: true
            // dropdownParent: $('.select-select2-container'),
            // minimumResultsForSearch: Infinity
        // });

        // ========== SLIDER ==========

        // ----- SLICK SLIDER COUNTER -----
        DOMs.sliderFull.on('init reInit afterChange', (event, slick, currentSlide) => {
            let i = (currentSlide ? currentSlide : 0) + 1;
            $('.slider-counter').text(i + '/' + slick.slideCount);
        });

        // ----- SLICK SLIDER -----
        DOMs.sliderDiscount.slick({
            prevArrow: DOMs.angleLeft,
            nextArrow: DOMs.angleRight,
            dots: false
        });

        // ========== ACCORDION ==========
        // $('#accordion').rewAccordion();

        // ========== TABS ==========
        $('#tabs').rewTabs();

        // ========== DATEPICKER ==========
        // $(".datepicker").flatpickr();

        // ========== SCROLLSPY ==========

        // ----- SCROLLING CLASS CHANGE -----
        // $(window).scroll(() => {
        //     if ($(this).scrollTop() > 200) {
        //         $(".link-up").addClass("visible");
        //     }
        //     else {
        //         $(".link-up").removeClass("visible");
        //     }
        // });

        // ----- ANCHOR LINKS SCROLLING -----
        DOMs.linkSmooth.click((e) => {
            e.preventDefault();
            const id = $(this).attr("href");
            let top = $(id).offset().top - 70;
            DOMs.documentBodyHtml.animate({
                scrollTop: top
            }, 1500);
        });

        if (bowser.firefox) {
            DOMs.body.addClass('brow-firefox');
        }
        if (bowser.safari) {
            DOMs.body.addClass('brow-safari');
        }
        if (bowser.msie) {
            DOMs.body.addClass('brow-msie');
        }
        if (bowser.msedge) {
            DOMs.body.addClass('brow-msedge');
        }
    });

// ========== !!! RESPONSIVE SCRIPTS !!! ===========

    // $(window).on('load resize', function () {
    //     if (window.matchMedia("(max-width: 767px)").matches) {
    //
    //     } else if (window.matchMedia("(min-width: 768px)").matches) {
    //
    //     }
    // });

})(jQuery);


