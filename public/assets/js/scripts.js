jQuery(document).ready(function() {
    "use strict";
    jQuery(function() {
      //  document.getElementById("cartModal").style.display = "block";

        var e=!0, a="#owl-main";
        function t() {
            jQuery(a+" .active .caption .fadeIn-1").stop().delay(500).animate( {
                opacity: 1
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            ), jQuery(a+" .active .caption .fadeIn-2").stop().delay(700).animate( {
                opacity: 1
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            ), jQuery(a+" .active .caption .fadeIn-3").stop().delay(1e3).animate( {
                opacity: 1
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            )
        }
        function i() {
            jQuery(a+" .active .caption .fadeInDown-1").stop().delay(500).animate( {
                opacity: 1, top: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            ), jQuery(a+" .active .caption .fadeInDown-2").stop().delay(700).animate( {
                opacity: 1, top: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            ), jQuery(a+" .active .caption .fadeInDown-3").stop().delay(1e3).animate( {
                opacity: 1, top: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            )
        }
        function n() {
            jQuery(a+" .active .caption .fadeInUp-1").stop().delay(500).animate( {
                opacity: 1, top: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            ), jQuery(a+" .active .caption .fadeInUp-2").stop().delay(700).animate( {
                opacity: 1, top: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            ), jQuery(a+" .active .caption .fadeInUp-3").stop().delay(1e3).animate( {
                opacity: 1, top: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            )
        }
        function o() {
            jQuery(a+" .active .caption .fadeInLeft-1").stop().delay(500).animate( {
                opacity: 1, left: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            ), jQuery(a+" .active .caption .fadeInLeft-2").stop().delay(700).animate( {
                opacity: 1, left: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            ), jQuery(a+" .active .caption .fadeInLeft-3").stop().delay(1e3).animate( {
                opacity: 1, left: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            )
        }
        function s() {
            jQuery(a+" .active .caption .fadeInRight-1").stop().delay(500).animate( {
                opacity: 1, left: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            ), jQuery(a+" .active .caption .fadeInRight-2").stop().delay(700).animate( {
                opacity: 1, left: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            ), jQuery(a+" .active .caption .fadeInRight-3").stop().delay(1e3).animate( {
                opacity: 1, left: "0"
            }
            , {
                duration: 800, easing: "easeOutCubic"
            }
            )
        }
        jQuery(a).owlCarousel( {
            autoPlay:5e3, stopOnHover:!0, navigation:!0, pagination:!0, singleItem:!0, addClassActive:!0, transitionStyle:"fade", navigationText:["<i class='icon fa fa-angle-left'></i>", "<i class='icon fa fa-angle-right'></i>"], afterInit:function() {
                t(), i(), n(), o(), s()
            }
            , afterMove:function() {
                t(), i(), n(), o(), s()
            }
            , afterUpdate:function() {
                t(), i(), n(), o(), s()
            }
            , startDragging:function() {
                e=!0
            }
            , afterAction:function() {
                e?jQuery(a+" .caption .fadeIn-1, "+a+" .caption .fadeIn-2, "+a+" .caption .fadeIn-3").css( {
                    opacity: 0
                }
                ):jQuery(a+" .caption .fadeIn-1, "+a+" .caption .fadeIn-2, "+a+" .caption .fadeIn-3").stop().delay(800).animate( {
                    opacity: 0
                }
                , {
                    duration: 400, easing: "easeInCubic"
                }
                ), e?jQuery(a+" .caption .fadeInDown-1, "+a+" .caption .fadeInDown-2, "+a+" .caption .fadeInDown-3").css( {
                    opacity: 0, top: "-15px"
                }
                ):jQuery(a+" .caption .fadeInDown-1, "+a+" .caption .fadeInDown-2, "+a+" .caption .fadeInDown-3").stop().delay(800).animate( {
                    opacity: 0, top: "-15px"
                }
                , {
                    duration: 400, easing: "easeInCubic"
                }
                ), e?$(a+" .caption .fadeInUp-1, "+a+" .caption .fadeInUp-2, "+a+" .caption .fadeInUp-3").css( {
                    opacity: 0, top: "15px"
                }
                ):jQuery(a+" .caption .fadeInUp-1, "+a+" .caption .fadeInUp-2, "+a+" .caption .fadeInUp-3").stop().delay(800).animate( {
                    opacity: 0, top: "15px"
                }
                , {
                    duration: 400, easing: "easeInCubic"
                }
                ), e?jQuery(a+" .caption .fadeInLeft-1, "+a+" .caption .fadeInLeft-2, "+a+" .caption .fadeInLeft-3").css( {
                    opacity: 0, left: "15px"
                }
                ):jQuery(a+" .caption .fadeInLeft-1, "+a+" .caption .fadeInLeft-2, "+a+" .caption .fadeInLeft-3").stop().delay(800).animate( {
                    opacity: 0, left: "15px"
                }
                , {
                    duration: 400, easing: "easeInCubic"
                }
                ), e?jQuery(a+" .caption .fadeInRight-1, "+a+" .caption .fadeInRight-2, "+a+" .caption .fadeInRight-3").css( {
                    opacity: 0, left: "-15px"
                }
                ):jQuery(a+" .caption .fadeInRight-1, "+a+" .caption .fadeInRight-2, "+a+" .caption .fadeInRight-3").stop().delay(800).animate( {
                    opacity: 0, left: "-15px"
                }
                , {
                    duration: 400, easing: "easeInCubic"
                }
                ), e=!1
            }
        }
        ), jQuery(a).hasClass("owl-one-item")&&jQuery(a+".owl-one-item").data("owlCarousel").destroy(), jQuery(a+".owl-one-item").owlCarousel( {
            singleItem: !0, navigation: !1, pagination: !1
        }
        ), jQuery(".home-owl-carousel").each(function() {
            var e=$(this), a=e.data("item");
            a||(a=5), e.owlCarousel( {
                items: a, itemsDesktop: [1199, 3], itemsTablet: [991, 2], navigation: !0, pagination: !1, navigationText: ["", ""]
            }
            )
        }
        ), jQuery(".homepage-owl-carousel").each(function() {
            var e=$(this), a=e.data("item");
            a||(a=4), e.owlCarousel( {
                items: a, itemsTablet: [991, 2], itemsDesktop: [1199, 3], navigation: !0, pagination: !1, navigationText: ["", ""]
            }
            )
        }
        ), jQuery(".blog-slider").owlCarousel( {
            items: 3, itemsDesktopSmall: [979, 2], itemsDesktop: [1199, 3], navigation: !0, slideSpeed: 300, pagination: !1, navigationText: ["", ""]
        }
        ), jQuery(".best-seller").owlCarousel( {
            items: 3, navigation: !0, itemsDesktopSmall: [979, 2], itemsDesktop: [1199, 2], slideSpeed: 300, pagination: !1, paginationSpeed: 400, navigationText: ["", ""]
        }
        ), jQuery(".sidebar-carousel").owlCarousel( {
            items: 1, itemsTablet: [978, 1], itemsDesktopSmall: [979, 2], itemsDesktop: [1199, 1], navigation: !0, slideSpeed: 300, pagination: !1, paginationSpeed: 400, navigationText: ["", ""]
        }
        ), jQuery(".brand-slider").owlCarousel( {
            items: 6, navigation: !0, slideSpeed: 300, pagination: !1, paginationSpeed: 400, navigationText: ["", ""]
        }
        ), jQuery("#advertisement").owlCarousel( {
            items: 1, itemsTablet: [978, 1], itemsDesktopSmall: [979, 1], itemsDesktop: [1199, 1], navigation: !0, slideSpeed: 300, pagination: !0, paginationSpeed: 400, navigationText: ["", ""]
        }
        )
    }
    ), jQuery(function() {
        echo.init( {
            offset: 100, throttle: 250, unload: !1
        }
        )
    }
    ), jQuery(function() {
        jQuery(".rating").rateit( {
            max: 5, step: 1, value: 4, resetable: !1, readonly: !0
        }
        )
    }
    ), jQuery(function() {
        jQuery(".price-slider").length>0&&jQuery(".price-slider").slider( {
            tooltip: 'always',
            min: 100, max: 80000, step: 100, value: [1000, 30000], handle: "square"
        }
        )
    }
    ), jQuery(function() {
        jQuery("#owl-single-product").owlCarousel( {
            items: 1, itemsTablet: [768, 3], itemsDesktop: [1199, 1], itemsTablet: [992, 1], itemsDesktopSmall: [768, 3]
        }
        ), jQuery("#owl-single-product-thumbnails").owlCarousel( {
            items: 4, pagination: !0, rewindNav: !0, itemsTablet: [992, 4], itemsDesktopSmall: [768, 4], itemsDesktop: [992, 1]
        }
        ), jQuery("#owl-single-product2-thumbnails").owlCarousel( {
            items: 6, pagination: !0, rewindNav: !0, itemsTablet: [768, 4], itemsDesktop: [1199, 3]
        }
        ), jQuery(".single-product-slider").owlCarousel( {
            stopOnHover: !0, rewindNav: !0, singleItem: !0, pagination: !0
        }
        )
    }
    ), jQuery(function() {
        (new WOW).init()
    }
    ), jQuery("[data-toggle='tooltip']").tooltip()
}

);