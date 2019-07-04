
jQuery(document).ready(function ($) {
  var bigimage = $("#big"),thumbs = $("#thumbs"),syncedSecondary = false;
  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 5000,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    nav: false
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left owl-prev-next-product" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right owl-prev-next-product" aria-hidden="true"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.trigger('to.owl.carousel', [current, 100, true]);
    }
    if (current < start) {
      thumbs.trigger('to.owl.carousel', [current - onscreen, 100, true]);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on('click', '.owl-item', function(){
		    var number = $(this).index();
		    bigimage.trigger('to.owl.carousel', [number, 300, true]);
		});
   
    
   
     // related product
 $('.owl-related-prd').owlCarousel({
        slideSpeed: 5000, nav: true,autoplay: true,dots: false,loop: true,margin:10,
        navText: [
          '<i class="fa fa-chevron-left owl-prev-next-product" aria-hidden="true"></i>',
          '<i class="fa fa-chevron-right owl-prev-next-product" aria-hidden="true"></i>'
        ],
        responsive:{0:{ items:2 }, 600:{items:3},1000:{items:4}
        }
    });
});
