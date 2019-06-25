
function menuScrollstory() {
    if ($(this).scrollTop() > 400) {
        $(".fixed-diary").addClass("active");
    }else{
        $(".fixed-diary").removeClass("active");
    }
}

menuScrollstory();
$(window).scroll(function() {
    menuScrollstory();
})