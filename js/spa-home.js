jQuery(document).ready(function($){
	$('.citynow').click(function() {
	    $(this).siblings(".cityshow").toggle();
	    $(this).toggleClass("city-active");

	  });
	function hoverPart() {
	    var slideIndex = 0,
	        slideTime;
	    var $slideCont = $(".part-slide-show .slide-cont");


	    function showPart() {
	        $(".slide-box li").eq(slideIndex).addClass('now').siblings('li').removeClass('now');
	        $(".part-slide-show").show(1);
	        $slideCont.hide().css({
	            left: "-5px"
	        });
	        $slideCont.eq(slideIndex).show().stop(true, true).animate({
	            left: 0
	        }, 50);
	    }

	    function hidePart() {
	        $(".slide-box li").removeClass('now');
	        $(".part-slide-show").hide(1);
	    }

	    $(".slide-box li").on({
	        mouseover: function() {
	            slideIndex = $(this).index();
	            clearTimeout(slideTime);
	            showPart();
	        },
	        mouseout: function() {
	            clearTimeout(slideTime);
	            slideTime = setTimeout(hidePart, 100);
	        }
	    });
	    $slideCont.hover(function() {
	        clearTimeout(slideTime);
	        showPart();
	    }, function(e) {
	        hidePart();
	    });
	}
	  function homeBannerSlide() {
        var bannerTime;
        var speed = 50000;
        var bannerIndex = 0;
        var $slideLi = $(".banner-slide li");
        var slideLength = $slideLi.length;

        function bannerAnimate(prevOrNext) {
            $(".banner-slide img").removeClass("now");
            if (typeof prevOrNext != "number") {
                if (prevOrNext == "right" || typeof prevOrNext == "undefined") {
                    if (bannerIndex < slideLength - 1) {
                        bannerIndex++;
                    } else {
                        bannerIndex = 0;
                    }
                } else if (prevOrNext == "left") {
                    if (bannerIndex < slideLength && bannerIndex > 0) {
                        bannerIndex--;
                    } else {
                        bannerIndex = $(".banner-slide li").length - 1;
                    }
                }
            }
            $slideLi.eq(bannerIndex).addClass("now").siblings("li").removeClass("now");
            $slideLi.eq(bannerIndex).siblings("li").fadeOut(700);
            $slideLi.eq(bannerIndex).fadeIn(200, function() {
                $(this).find("img").fadeIn(100).toggleClass("now");
            });
            $(".slide-btn span").eq(bannerIndex).addClass("now").siblings().removeClass("now");
        }

        $(".slide-btn span").mouseover(function() {
            clearInterval(bannerTime);
            bannerIndex = $(this).index();
            bannerAnimate(bannerIndex);
        });
        $(".banner-btn").mouseover(function() {
            clearInterval(bannerTime);
        });
  
        $(".banner-next").click(function() {
            bannerAnimate("right");
        });
     
        $(".banner-prev").click(function() {
            bannerAnimate("left");
        });
        $(".banner-slide").hover(function() {
            clearInterval(bannerTime);
        }, function() {
            clearInterval(bannerTime);
            bannerTime = setInterval(bannerAnimate, speed);
        }).trigger("mouseleave");
    }

    function showMoreBtn(pos) {
	    var theCenter = $(".float-nav-wrap>div").width() / 2;
	    switch (pos) {
	        case "prev":
	            theCenter = $(".float-nav-wrap>div").scrollLeft() - theCenter;
	            $(".float-nav-wrap>div").animate({ scrollLeft: theCenter }, 400, function() {
	                console.log('1111');
	                if ($(".float-nav-wrap>div").scrollLeft() == 0) {
	                    $(".prev").fadeOut();
	                }
	                $(".next").fadeIn();
	            });
	            break;
	        case "next":
	            theCenter = $(".float-nav-wrap>div").scrollLeft() + theCenter;
	            $(".float-nav-wrap>div").animate({ scrollLeft: theCenter }, 400, function() {
	                 console.log('22222');
	                if ($(".float-nav-wrap>div").scrollLeft() + $(".float-nav-wrap>div").width() == $(".float-nav-wrap>div span").width()) {
	                    $(".next").fadeOut();
	                } else {
	                    $(".next").fadeIn();
	                }
	                $(".prev").fadeIn();
	            });
	            break;
	    }
	}
	$(".prev").click(function() {
	    showMoreBtn("prev");
	});
	$(".next").click(function() {
	    showMoreBtn("next");
	});
	hoverPart();
	homeBannerSlide();

	// click menu service home
	    $(".float-nav-wrap a").click(function() {
        var nIn = $(this).index();

        $(this).addClass("now").siblings().removeClass("now");
        /*
        * click get data from url by ajax
        * Check if the data has been received yet
        * Get data content with the selected data and insert it in the order on the menu
        */
        $(".tab-cont-wrap").eq(nIn).addClass("now").siblings(".tab-cont-wrap").removeClass("now");
    });

    // sang
    $('.note-menu').mouseenter(function(){
     //   $('.menu-left').css("display","block");
    }).mouseleave(function(){
      //  $('.menu-left').css("display","none");       
    });

	//huy js
    var offset = $(".float-nav-wrap").offset();

    function menuScrollBottom() {
        if($(".float-nav-wrap").length){
            if ($(this).scrollTop() >  offset.top) {
                $(".float-nav-wrap").addClass("active");
            }
            else if($(this).scrollTop() <  offset.top){
                $(".float-nav-wrap").removeClass("active");
            }
        }
    }

    menuScrollBottom();
    $(window).scroll(function() {
        menuScrollBottom();
    });

    // carousel
    var owl_carousel = $(".owl-carousel");
    if(owl_carousel.length) {
        owl_carousel.owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoWidth:true,
            responsive: {
                0: {
                    items: 3
                },
                992: {
                    items: 8
                },
            }
        });
    }

	function menuScrolls() {
        if ($(this).scrollTop() > 100) {
            $("#menu-scroll").attr("style", "display: block");
            $("#menu-scroll").addClass("active");
            owl_carousel.trigger('refresh.owl.carousel');
        }else{
            $("#menu-scroll").removeClass("active");
            owl_carousel.trigger('refresh.owl.carousel');
        }
    }

    menuScrolls();
    $(window).scroll(function() {
        menuScrolls();
    });

	//popup
    $('.message_click,.coupon_click, .data-head, .my-order').on('click', function () {
        $('.modal').modal('show')
    });

    //scroll top
	$(".go-top").on("click",function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
	});

	// carousel
    if($(".owl-carousel").length) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 3
                },
                992: {
                    items: 8
                },
            }
        });
    }


    var offsetAdv = $(".banner-scroll").offset();
    var bannerHeight =  $(".banner-scroll .spa-share").height();
    function menuScrollBannerAdv(top) {
        var offsetFooter = $(".footer-app-wrap").offset();
        if ($(this).scrollTop() >  offsetAdv.top) {
            $(".banner-scroll").addClass("active");
        }
        else if($(this).scrollTop() <  offsetAdv.top){
            $(".banner-scroll").removeClass("active");
        }
        if($(this).scrollTop() + top > offsetFooter.top - bannerHeight){
            $(".banner-scroll").addClass("pause");
        }else{
            $(".banner-scroll").removeClass("pause");
        }
    }

    menuScrollBannerAdv(110);
    $(window).scroll(function() {
        menuScrollBannerAdv(110);
    })

    if($(".mobile-menu .menu").length){
        $(".mobile-menu .menu").click(function () {
            $(this).toggleClass("active");
        })
    }

    function menuScroll() {
        if ($(this).scrollTop() > 100) {
            $(".fixed-top").addClass("active");
        }else{
            $(".fixed-top").removeClass("active");
        }
    }

    menuScroll();
    $(window).scroll(function() {
        menuScroll();
    })



    if($(".child-tab").length) {
        $(".child-tab").on("click", "li.active", function () {
            $(".child-tab .tab-pane.active").slideToggle(200);
            $(".child-tab .tab-pane").removeAttr("style");
        });
    }
});