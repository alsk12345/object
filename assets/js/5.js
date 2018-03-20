$(function(){
	$('.nav-xc-x .input').click(function(){
		$('.input').animate({'width':335},300);
		console.log(2333);
		// $('.nav-xc-x .input .input-a').css({'background-position':' -30px -140px!important;'});
	});
	
	$('.nav-xc-x .input').blur(function(){
		console.log(111);
		$('.input').animate({'width':100},300);
	});
	$('.nav-xc-x .input').focus(function(){
		$('.input').css({'border':'1px solid #ff9d00','background':'#fff','box-shadow':'#ff9d00'})
		console.log(11111);
		
	});
	$(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
           	// console.log(scrollTop);
           	
           	if(scrollTop < 600){
           		$('.top').hide();
           	} else{
           		$('.top').show();
           	}
           	if(scrollTop + $(window).height() - $('.out').offset().top >=0){
           		var dis = scrollTop + $(window).height() - $('.out').offset().top;
           		$('.position').css('bottom',dis + 20);
           	}
            if(scrollTop + $(window).height() - $('.footer').offset().top >=0){
              var dis = scrollTop + $(window).height() - $('.footer').offset().top;
              $('.right-one').css('bottom',dis + 20);
            }  

	});
	
  $('.top-ul .top-fs').mouseenter(function(){
  	$('.top-ffs').show();
  }).mouseleave(function(){
  	$('.top-ffs').delay(1100).hide(0);
  })
  
  $('.out-conter').click(function(){
      // $('position').hide();
      $('.zzc').fadeIn();
      // console.len(78787);
    });

    $('.div-abc i').click(function(){
      $('.zzc').fadeOut();
    })
	 
})

