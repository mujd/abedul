function init_plugins() {

    $(function() {
        "use strict";
        $(function() {
            $(".preloader").fadeOut();
        });
        // scroll
        var scrollWindow = function() {
            $(window).scroll(function() {
                var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $('.mrf_navbar'),
                    sd = $('.js-scroll-wrap');

                if (st > 150) {
                    if (!navbar.hasClass('scrolled')) {
                        navbar.addClass('scrolled');
                    }
                }
                if (st < 150) {
                    if (navbar.hasClass('scrolled')) {
                        navbar.removeClass('scrolled sleep');
                    }
                }
                if (st > 151) {
                    if (!navbar.hasClass('awake')) {
                        navbar.addClass('awake');
                    }

                    if (sd.length > 0) {
                        sd.addClass('sleep');
                    }
                }
                if (st < 151) {
                    if (navbar.hasClass('awake')) {
                        navbar.removeClass('awake');
                        navbar.addClass('sleep');
                    }
                    if (sd.length > 0) {
                        sd.removeClass('sleep');
                    }
                }
                var imagen = $('.navbar-brand .imagen-logo-base');
                var btnSearch = $('#btnSearch');
                if ($(document).scrollTop() <= 151) {
                    imagen.css("width", "500px");
                    btnSearch.addClass('btn-outline-light');
                    btnSearch.removeClass('btn-danger');
                } else {
                    imagen.css("width", "300px");
                    imagen.css("width", "300px");
                    btnSearch.removeClass('btn-outline-light');
                    btnSearch.addClass('btn-danger');
                }

                if ($(this).scrollTop() > 40) {
                    $('#topBtn').fadeIn();
                } else {
                    $('#topBtn').fadeOut();
                }
            });
        };
        scrollWindow();
        $("#topBtn").click(function() {
            $('html ,body').animate({ scrollTop: 0 }, 800);
        });
        $(window).on('load', function() {
            /*------------------
            	Preloder
            --------------------*/
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");

        });
        /*------------------
        		Background Set
        	--------------------*/
        $('.set-bg').each(function() {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        // loader
        /* var loader = function() {
            setTimeout(function() {
                if ($('#mrf-loader').length > 0) {
                    $('#mrf-loader').removeClass('show');
                }
            }, 1);
        };
        loader(); */
        var carousel = function() {
            $('.home-slider').owlCarousel({
                loop: true,
                autoplay: true,
                margin: 0,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                nav: true,
                dots: false,
                autoplayHoverPause: false,
                items: 1,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                /* navText: ['<span class="fas fa-angle-left">', '<span class="fas fa-angle-right">'], */
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true
                    },
                    600: {
                        items: 1,
                        nav: false,
                        dots: true
                    },
                    1000: {
                        items: 1,
                        nav: true
                    }
                }
            });

            $('.carousel').owlCarousel({
                center: true,
                loop: true,
                items: 1,
                margin: 30,
                stagePadding: 0,
                nav: true,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                /* navText: ['<span class="fas fa-angle-left">', '<span class="fas fa-angle-right">'], */
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });

            $('.carousel1').owlCarousel({
                loop: false,
                items: 1,
                margin: 30,
                stagePadding: 10,
                nav: true,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                /* navText: ['<span class="fas fa-angle-left">', '<span class="fas fa-angle-right">'], */
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });

            $('.carousel-engine').owlCarousel({
                loop: false,
                items: 1,
                margin: 30,
                stagePadding: 0,
                nav: false,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                /* navText: ['<span class="fas fa-angle-left">', '<span class="fas fa-angle-right">'], */
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                }
            });
        };
        carousel();

        var counter = function() {

            $('#section-counter').waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('mrf-animated')) {

                    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                    $('.number').each(function() {
                        var $this = $(this),
                            num = $this.data('number');
                        console.log(num);
                        $this.animateNumber({
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 7000);
                    });

                }

            }, { offset: '95%' });

        }
        counter();

        var contentWayPoint = function() {
            var i = 0;
            $('.mrf-animate').waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('mrf-animated')) {

                    i++;

                    $(this.element).addClass('item-animate');
                    setTimeout(function() {

                        $('body .mrf-animate.item-animate').each(function(k) {
                            var el = $(this);
                            setTimeout(function() {
                                var effect = el.data('animate-effect');
                                if (effect === 'fadeIn') {
                                    el.addClass('fadeIn mrf-animated');
                                } else if (effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft mrf-animated');
                                } else if (effect === 'fadeInRight') {
                                    el.addClass('fadeInRight mrf-animated');
                                } else {
                                    el.addClass('fadeInUp mrf-animated');
                                }
                                el.removeClass('item-animate');
                            }, k * 50, 'easeInOutExpo');
                        });

                    }, 100);

                }

            }, { offset: '95%' });
        };
        contentWayPoint();

        /* var lightboxAhimsa = function() {
            lightbox.option({
                'resizeDuration': 200,
                'albumLabel': 'Imagen %1 de %2',
                'disableScrolling': false,
                'wrapAround': true
            });
        };
        lightboxAhimsa(); */
    });
}