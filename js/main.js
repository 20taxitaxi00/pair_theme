function slideSwitch() {
    var $active = $('#slideshow img.active');
 
    if ( $active.length == 0 ) $active = $('#slideshow img:last');
 
    var $next =  $active.next().length ? $active.next()
       : $('#slideshow img:first');
 
    $active.addClass('last-active');
 
    $next.css({opacity: 0.0})
       .addClass('active')
       .animate({opacity: 1.0}, 3000, function() {
            $active.removeClass('active last-active');
       });
 }
 
 $(function() {
    setInterval( "slideSwitch()", 5000 );
 });

 $(function(){
   $('.blog-item').mouseover(function(){
      $('.slidetext').fadeIn();
   });
 });

 $(function(){
   $('.blog-item').mouseleave(function(){
      $('.slidetext').fadeOut();
   });
 });

//  topに戻る動き
$(function(){
   $('.home').on('click',function(){
      $('body , html').animate({scrollTop:0},1000);
   });
});
