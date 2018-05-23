(($) => {
    "use strict";

    const DOMs = {

        documentBodyHtml: $('html, body'),
        documentBody: $('body'),

        keys: {37: 1, 38: 1, 39: 1, 40: 1},

        menuTrigger: $('#menu-trigger'),

        selectChosen: $(".chosen-select"),
        selectSelect2: $('.select2-select'),

        sliderFull: $('.slider-full'),

        linkSmooth: $(".smooth"),

        cameraTooltipClose: $('.nav-widgets__camera__tooltip_close'),
        cameraTooltip: $('.nav-widgets__camera__tooltip'),

        sliderDiscount: $('.slider-discount'),

        sliderManager: $('.slider-manager'),

        angleLeft: '<div class="arrow left"><svg width="16px" height="25px" viewBox="0 0 16 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Головна" transform="translate(-575.000000, -638.000000)" fill="#064778" stroke="#064778"> <g id="Group-28" transform="translate(256.000000, 516.000000)"> <g id="Акция-3"> <path d="M323.797542,134.05049 L334,144.252947 L332.019182,146.233765 L320,134.214583 L320.155108,134.059474 L320.114817,134.019182 L332.133999,122 L333.991015,123.857017 L323.797542,134.05049 Z" id="Combined-Shape-Copy"></path> </g> </g> </g> </g></svg></div>',
        angleRight: '<div class="arrow right"><svg width="16px" height="25px" viewBox="0 0 16 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Головна" transform="translate(-620.000000, -638.000000)" fill="#064778" stroke="#064778"> <g id="Group-28" transform="translate(256.000000, 516.000000)"> <g id="Акция-3"> <path d="M378.844892,134.059474 L379,134.214583 L366.980818,146.233765 L365,144.252947 L375.202458,134.05049 L365.008985,123.857017 L366.866001,122 L378.885183,134.019182 L378.844892,134.059474 Z" id="Combined-Shape-Copy-2"></path> </g> </g> </g> </g></svg></div>',
    };

    // IMG CHANGE SNIPPET
    const IMGs = {
        imgChange: $('.img-change'),
        imgChangePlace: $('.img-change_place'),
        imgChangeImg: $('.img-change_image'),
        imgChangeHead: $('.img-change_heading')
    };


    (function ($) {
        $.fn.rewImgChange = function () {
            let make = function () {
                let image = $(this).find(IMGs.imgChangeImg);
                let heading = $(this).find(IMGs.imgChangeHead);
                let place = $(this).find(IMGs.imgChangePlace);


                if (window.matchMedia("(max-width: 767px)").matches) {
                    image.insertAfter(heading);
                } else if (window.matchMedia("(min-width: 768px)").matches) {
                    image.appendTo(place);
                }
            }
            return this.each(make);
        };
    })(jQuery);

    $(window).on('load resize', function () {
        IMGs.imgChange.rewImgChange();

    });

    $(document).ready(() => {



        // FORM ANIMATION
        const FORMs = {
            formManagerBtn: $('.form-manager button'),
            formManagerBtnBack: $('.form-manager_back'),
            formManagerForm: $('.manager-block-row-form'),
            formManagerSuccess: $('.manager-block-row-success')
        };

        FORMs.formManagerBtn.click(function (e) {
            e.preventDefault();
            FORMs.formManagerForm.addClass('hidden');
            FORMs.formManagerSuccess.removeClass('hidden');
        });


        FORMs.formManagerBtnBack.click(function (e) {
            e.preventDefault();
            FORMs.formManagerForm.removeClass('hidden');
            FORMs.formManagerSuccess.addClass('hidden');
        });

        // CAMERA
        DOMs.cameraTooltipClose.click(function () {
            DOMs.cameraTooltip.hide();
        });


        // ========== MENU ==========

        DOMs.menuTrigger.click(function (e) {
            e.preventDefault();
            DOMs.documentBodyHtml.toggleClass('open');
        });

        // ========== SELECT ==========

        // ----- CHOSEN -----
        DOMs.selectChosen.chosen({
            disable_search_threshold: 4000,
            no_results_text: "Нічого не знайдено"
        });

        // ----- SELECT2 -----
        // DOMs.selectSelect2.select2({
        //     placeholder: "Choose...",
        //     allowClear: true
        // dropdownParent: $('.select-select2-container'),
        // minimumResultsForSearch: Infinity
        // });

        // ========== SLIDER ==========


        // ----- SLICK SLIDER -----
        DOMs.sliderDiscount.slick({
            prevArrow: DOMs.angleLeft,
            nextArrow: DOMs.angleRight,
            dots: false
        });
        DOMs.sliderManager.slick({
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
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $("nav").addClass("scroll");
            }
            else {
                $("nav").removeClass("scroll");
            }
        });

        // ----- ANCHOR LINKS SCROLLING -----
        // DOMs.linkSmooth.click((e) => {
        //     e.preventDefault();
        //     const id = $(this).attr("href");
        //     let top = $(id).offset().top - 70;
        //     DOMs.documentBodyHtml.animate({
        //         scrollTop: top
        //     }, 1500);
        // });

        // if (bowser.firefox) {
        //     DOMs.body.addClass('brow-firefox');
        // }
        // if (bowser.safari) {
        //     DOMs.body.addClass('brow-safari');
        // }
        // if (bowser.msie) {
        //     DOMs.body.addClass('brow-msie');
        // }
        // if (bowser.msedge) {
        //     DOMs.body.addClass('brow-msedge');
        // }
    });

// ========== !!! RESPONSIVE SCRIPTS !!! ===========

    // $(window).on('load resize', function () {
    //     if (window.matchMedia("(max-width: 767px)").matches) {
    //         imgChanging();
    //     } else if (window.matchMedia("(min-width: 768px)").matches) {
    //         imgChangingBack();
    //     }
    // });

})(jQuery);


