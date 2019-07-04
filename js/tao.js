$(window).load(function() {
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 68,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(".see-more").click(function(){
    $(".editCont").toggleClass("active");
    $(this).find("span").replaceWith("<span>Thu nhỏ</span>")
});


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('subTit_time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
var date = document.getElementById("subTit_time").innerText;
var countDownDate = new Date(date).getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("subTit_time").innerHTML = days + " Ngày " + hours + ":"
  + minutes + ":" + seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("subTit_time").innerHTML = "EXPIRED";
  }
}, 1000);