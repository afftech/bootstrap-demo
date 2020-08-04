$(document).ready(function(){
 $('.header').height($(window).height());
 $('.portfolio').height($(window).height());
 $('.blog').height($(window).height());
 $('.team').height($(window).height());
 $('.contact-form').height($(window).height());
})

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
 })