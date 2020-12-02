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

   //  blogのテキストをフェードイン
    $('.blog-item').mouseover(function(){
      $('.slidetext').fadeIn();
   });
   // カーソル離れるとフェードアウト
   $('.blog-item').mouseleave(function(){
      $('.slidetext').fadeOut();
   });

    // ハンバーガーメニュー
	$('#q7-btn').on('click',function(){
		let isActive = $(this).hasClass('on');
		toggleDrower(isActive);
   });
   
	// ドロワー
	function toggleDrower(isActive) {
	    $('.js-hamburger')
	    if (isActive) {
         $('#drower-bg').fadeOut(400);
	    } else {
	      $('#drower-bg').fadeIn(400);
	    }
	    $('.js-hamburger').toggleClass('on');
	    $('.js-drower').toggleClass('on');
	  }

 });

 