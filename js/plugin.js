$(document).ready(function(){

    //trigger bxslider
    $('.bxslider').bxSlider({
        pager:false
    });
    
    var li = $("li");

    li.on(
        "mouseenter click",function(){
        $(this).addClass("active").siblings().removeClass('active');
    });


    $(window).resize(function(){

        $('.header').height($(window).height());
        $('.overlay').height($(window).height());
        $('.bx-viewport').height($(window).height());

    })


});
