'use strict';

(function ($) {
    $.fn.rewTabs = function () {
        var make = function make() {

            var tabLinks = $(this).find('.tabs li a');
            var tabContent = $(this).find('.tabs-content');

            for (var i = 0; i < tabLinks.length; i++) {
                $(tabLinks[i]).click(function (e) {
                    e.preventDefault();

                    $(tabLinks).removeClass('active');
                    $(tabContent).removeClass('active');

                    var j = $(tabLinks).index(this);

                    $(this).addClass('active');
                    $(tabContent[j]).addClass('active');
                });
            }
        };
        return this.each(make);
    };
})(jQuery);
(function ($) {
    "use strict";

    var DOMs = {

        documentBodyHtml: $('html, body'),
        documentBody: $('body'),

        keys: { 37: 1, 38: 1, 39: 1, 40: 1 },

        menuTrigger: $('#menu-trigger'),

        selectChosen: $(".chosen-select"),
        selectSelect2: $('.select2-select'),

        docLink: $('.documents-list__link'),
        docImg: $('.documents-list-image__li'),

        sliderFull: $('.slider-full'),

        linkSmooth: $(".smooth"),

        tabsList: $('.tabs'),
        tabs: $('#tabs'),

        cameraTooltipClose: $('#close-tooltip'),
        cameraTooltip: $('.nav-widgets__camera__tooltip'),

        sliderDiscount: $('.slider-discount'),

        sliderManager: $('.slider-manager'),

        sliderRepair: $('.slider-repair'),

        sliderPlanning: $('.slider-planning'),

        cookieClose: $('#close-cookie'),
        cookie: $('.cookie'),

        angleLeft: '<div class="arrow left"><svg width="16px" height="25px" viewBox="0 0 16 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Головна" transform="translate(-575.000000, -638.000000)" fill="#064778" stroke="#064778"> <g id="Group-28" transform="translate(256.000000, 516.000000)"> <g id="Акция-3"> <path d="M323.797542,134.05049 L334,144.252947 L332.019182,146.233765 L320,134.214583 L320.155108,134.059474 L320.114817,134.019182 L332.133999,122 L333.991015,123.857017 L323.797542,134.05049 Z" id="Combined-Shape-Copy"></path> </g> </g> </g> </g></svg></div>',
        angleRight: '<div class="arrow right"><svg width="16px" height="25px" viewBox="0 0 16 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Головна" transform="translate(-620.000000, -638.000000)" fill="#064778" stroke="#064778"> <g id="Group-28" transform="translate(256.000000, 516.000000)"> <g id="Акция-3"> <path d="M378.844892,134.059474 L379,134.214583 L366.980818,146.233765 L365,144.252947 L375.202458,134.05049 L365.008985,123.857017 L366.866001,122 L378.885183,134.019182 L378.844892,134.059474 Z" id="Combined-Shape-Copy-2"></path> </g> </g> </g> </g></svg></div>',

        angleLeftWt: '<div class="arrow left"><svg width="51px" height="61px" viewBox="0 0 51 61" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <path d="M15.7071068,23.2529471 L13.0191823,25.9408716 L0.292893219,13.2145825 L0.448001591,13.0594741 L0.407709756,13.0191823 L13.1339988,0.292893219 L15.6981222,2.8570166 L5.50464925,13.0504896 L15.7071068,23.2529471 Z" id="path-1"></path> <filter x="-201.1%" y="-113.1%" width="502.2%" height="341.7%" filterUnits="objectBoundingBox" id="filter-2"> <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset> <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur> <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix> </filter> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Про-комплекс" transform="translate(-1143.000000, -4130.000000)" fill-rule="nonzero"> <g id="Group-29" transform="translate(232.000000, 3640.000000)"> <g id="Group-25" transform="translate(928.000000, 505.000000)"> <g id="Combined-Shape-Copy"> <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use> <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use> </g> </g> </g> </g> </g></svg></div>',
        angleRightWt: '<div class="arrow right"><svg width="51px" height="61px" viewBox="0 0 51 61" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <path d="M15.7071068,23.2529471 L13.0191823,25.9408716 L0.292893219,13.2145825 L0.448001591,13.0594741 L0.407709756,13.0191823 L13.1339988,0.292893219 L15.6981222,2.8570166 L5.50464925,13.0504896 L15.7071068,23.2529471 Z" id="path-1"></path> <filter x="-201.1%" y="-113.1%" width="502.2%" height="341.7%" filterUnits="objectBoundingBox" id="filter-2"> <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset> <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur> <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix> </filter> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Про-комплекс" transform="translate(-1142.000000, -4130.000000)" fill-rule="nonzero"> <g id="Group-29" transform="translate(232.000000, 3640.000000)"> <g id="Group-25" transform="translate(936.000000, 518.000000) scale(-1, 1) translate(-936.000000, -518.000000) translate(928.000000, 505.000000)"> <g id="Combined-Shape-Copy"> <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use> <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use> </g> </g> </g> </g> </g></svg></div>'
    };

    // IMG CHANGE SNIPPET
    var IMGs = {
        imgChange: $('.img-change'),
        imgChangePlace: $('.img-change_place'),
        imgChangeImg: $('.img-change_image'),
        imgChangeHead: $('.img-change_heading')
    };

    (function ($) {
        $.fn.rewImgChange = function () {
            var make = function make() {
                var image = $(this).find(IMGs.imgChangeImg);
                var heading = $(this).find(IMGs.imgChangeHead);
                var place = $(this).find(IMGs.imgChangePlace);

                if (window.matchMedia("(max-width: 567px)").matches) {
                    image.insertAfter(heading);
                } else if (window.matchMedia("(min-width: 568px)").matches) {
                    image.appendTo(place);
                }
            };
            return this.each(make);
        };
    })(jQuery);

    // DOCS
    var docsHover = function docsHover() {
        var docArr = DOMs.docLink;
        var docImgArr = DOMs.docImg;

        var _loop = function _loop(i) {
            $(docArr[i]).hover(function () {
                docImgArr.removeClass('visible');
                $(docImgArr[i]).addClass('visible');
            }, function () {
                docImgArr.removeClass('visible');
            });
        };

        for (var i = 0; i < docArr.length; i++) {
            _loop(i);
        }
    };
    var docsClick = function docsClick() {
        var docArr = DOMs.docLink;
        var docImgArr = DOMs.docImg;

        var _loop2 = function _loop2(i) {
            $(docArr[i]).click(function (e) {
                e.preventDefault();
                if ($(this).hasClass('active')) {
                    docImgArr.removeClass('visible');
                } else {
                    $(this).addClass('active');
                    docImgArr.removeClass('visible');
                    $(docImgArr[i]).addClass('visible');
                }
            });
        };

        for (var i = 0; i < docArr.length; i++) {
            _loop2(i);
        }
    };

    $(document).ready(function () {

        // FORM ANIMATION 1
        var FORMs = {
            formManagerBtn: $('.form-order-manager button'),
            formManagerBtnBack: $('.form-order-manager_back'),
            formManagerForm: $('.manager-block-row-form'),
            formManagerSuccess: $('.manager-block-row-success'),

            formOrderBtn: $('.form-order button'),
            formOrderForm: $('.form-main__form'),
            formOrderSuccess: $('.form-main__success')
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

        FORMs.formOrderBtn.click(function (e) {
            e.preventDefault();
            FORMs.formOrderForm.addClass('hidden');
            FORMs.formOrderSuccess.removeClass('hidden');
        });

        // PLANNING
        var PLANs = {
            planningLink: $('.tabs-flat_link'),
            planningBtn: $('.header-planning .btn-filter'),
            planningSection: $('.section-planning'),
            planStar: $('.plan_star')
        };

        PLANs.planningLink.click(function (e) {
            e.preventDefault();
            PLANs.planningLink.removeClass('active');
            $(this).addClass('active');
            PLANs.planningBtn.addClass('choosed');
            PLANs.planningSection.addClass('section-planning-change');
        });

        PLANs.planningBtn.click(function (e) {
            e.preventDefault();
            if ($(this).hasClass('choosed')) {
                $(this).removeClass('choosed');
                PLANs.planningLink.removeClass('active');
                PLANs.planningSection.removeClass('section-planning-change');
            }
        });

        PLANs.planStar.click(function () {
            $(this).toggleClass('active');
        });

        // CAMERA
        DOMs.cameraTooltipClose.click(function () {
            DOMs.cameraTooltip.fadeOut('fast');
        });

        DOMs.cookieClose.click(function () {
            DOMs.cookie.fadeOut('fast');
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

        DOMs.sliderPlanning.slick({
            arrows: false,
            dots: false,
            variableWidth: true,
            responsive: [{
                breakpoint: 40000,
                settings: "unslick"
            }, {
                breakpoint: 567,
                setting: {
                    arrows: false,
                    dots: false,
                    variableWidth: true
                }
            }]
        });

        DOMs.sliderManager.slick({
            prevArrow: DOMs.angleLeft,
            nextArrow: DOMs.angleRight,
            dots: false
        });

        DOMs.sliderRepair.slick({
            prevArrow: DOMs.angleLeftWt,
            nextArrow: DOMs.angleRightWt,
            dots: false,
            responsive: [{
                breakpoint: 567,
                settings: {
                    dots: true,
                    arrows: false
                }
            }]
        });

        // ========== ACCORDION ==========
        // $('#accordion').rewAccordion();

        // ========== TABS ==========
        DOMs.tabs.rewTabs();

        // DOMs.tabsList.slick({
        //     // prevArrow: DOMs.angleLeft,
        //     // nextArrow: DOMs.angleRight,
        //     responsive: [
        //         {
        //             breakpoint: 40000,
        //             settings: "unslick"
        //         },
        //         {
        //             breakpoint: 568,
        //             setting: {
        //                 prevArrow: DOMs.angleLeft,
        //                 nextArrow: DOMs.angleRight,
        //             }
        //         }
        //     ]
        // });

        // ========== DATEPICKER ==========
        // $(".datepicker").flatpickr();

        // ========== SCROLLSPY ==========

        // ----- SCROLLING CLASS CHANGE -----
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $("nav").addClass("scroll");
            } else {
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

    $(window).on('load resize', function () {
        IMGs.imgChange.rewImgChange();

        if (window.matchMedia("(max-width: 767px)").matches) {
            docsClick();
        } else if (window.matchMedia("(min-width: 768px)").matches) {
            docsHover();
        }
    });
})(jQuery);

(function () {
    'use strict';
})();