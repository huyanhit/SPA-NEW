jQuery(document).ready(function($){
	var $search = $('#searchWd'),
        $searchBtn = $('#YMsearch'),
        $searchList = $('.search-list'),
        $hotLab = $('.hot-lab'),
        searchMsg = $search.attr('msg');
        $search.focus(function() {
        clearTimeout($search[0].t);
        $(".hot-searchWd").addClass("hot-focus");

        if ($search.parents('.chanl-head').length) {
            $(this).parents('.hospital-deatail-search').animate({ left: '-220px', width: '365px' }, 600);
            $(this).animate({ width: '320px' }, 600);
            $searchList.animate({ width: '335px' }, 600);
        }
    }).blur(function() {
    	 if ($search.parents('.chanl-head').length) {
            $(this).parents('.hospital-deatail-search').stop().animate({ left: '0', width: '245px' }, 600);
            $(this).stop().animate({ width: '200px' }, 600);
            $searchList.animate({ width: '215px' }, 600);
        }
   
        if ($.trim($(this).val()) == '') {
            $hotLab.css('display', 'block');
            $(this).removeClass('search-focus');
            $(this).siblings('.search-btn').removeClass('search-btn-on');
            $search[0].t = setTimeout(function() {
                $searchList.css('display', 'none');
                $(".hot-searchWd").show();
            }, 200)
        }
       
    });
    $search.on("keypress change keyup keydown focus", function() {
        keyVal();
    });
  
    function keyVal() {
     //   getSearchList();
        if ($.trim($search.val()) == '') {
            $(".hot-searchWd").show();
            $searchList.hide();
        } else {
            $(".hot-searchWd").hide();
        }

    }
	
});