$(document).ready(function(){
    //header
    $(".header .uk-section  li   ").on('click',function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".active").animate({
            width:'60px'
        },3000)
    })
})