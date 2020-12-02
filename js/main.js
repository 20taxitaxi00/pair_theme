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

$(function(){
   // ハンバーガー
   $('#q7-btn').on('click',function(){
		let isActive = $(this).hasClass('on');
		toggleDrower(isActive);
	});

	// ドロワー
	function toggleDrower(isActive) {
	    $('.js-hamburger')
	    if (isActive) {
	      $('#drower-bg').fadeOut(600);
	    } else {
	      $('#drower-bg').fadeIn(600);
	    }
	    $('.js-hamburger').toggleClass('on');
	    $('.js-drower').toggleClass('on');
	  }

});