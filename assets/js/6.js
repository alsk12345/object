$(function(){
	$('.nav-xc-x .input').click(function(){
		$('.input').animate({'width':335},300);
		// console.log(2333);
		// $('.nav-xc-x .input .input-a').css({'background-position':' -30px -140px!important;'});
	});
	
	$('.nav-xc-x .input').blur(function(){
		// console.log(111);
		$('.input').animate({'width':100},300);
	});
	$('.nav-xc-x .input').focus(function(){
		$('.input').css({'border':'1px solid #ff9d00','background':'#fff','box-shadow':'#ff9d00'})
		// console.log(11111);
	})

	$('.one-a-a').animate({'top':86},800);
	$('.one-a-a').show();

	$('.three-div').fadeIn(200).show();
	console.log(000);

	var index = 0;
	var len = $('.one-a-div li').length;
	// console.log(len);
	console.log(len);
	var timer;
	run();
	$('.one-a-div li:eq(0)').clone(true).appendTo($('.one-a-div'));
	console.log($('.one-a-div li:eq(0)'));
	function run(){
		timer =setInterval(function(){
			$('.two-div-ol li').eq(index%len).removeClass('active');
			// console.log(timer);
			index++;
			if(index > len){
				index = 1;
				$('.one-a-div').css('margin-left',0);
			}
			$('.two-div-ol li').eq(index%len).addClass('active');
			$('.one-a-div').animate({'margin-left':-170*index},300);
			// console.log(000);
		},2000);	
	}
	$('.two-div-ol li').click(function(){
		$('.two-div-ol li').eq(index%len).removeClass('active');

		index = $(this).index();

		$('.two-div-ol li').eq(index%len).addClass('active');
		$('.one-a-div').animate({'margin-left':-170*index});
		console.log(111);
	})

	$(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
           	console.log(scrollTop);
           	
           	if(scrollTop < 600){
           		$('.top').hide();
           	} else{
           		$('.top').show();
           	}
           	// if(scrollTop<55){
           	// 	$('.out-conter').hide();
           	// } else{
           	// 	$('.out-conter').show();
           	// }
           	if(scrollTop + $(window).height() - $('.out').offset().top >=0){
           		var dis = scrollTop + $(window).height() - $('.out').offset().top;
           		$('.position').css('bottom',dis + 20);
           	} 
           
		})
	$('.text-li').mouseenter(function(){
		$('.flead').fadeIn(600).show(100);
		
	}).mouseleave(function(){
		$('.flead').fadeOut(600);
		
	});
	var index=0;
	var len=$('.mfw-ul li').length;
	$('.mfw-ul li').click(function(){
		$('.mfw-ul li').eq(index%len).removeClass('actives');
		index = $(this).index();
	
		$('.mfw-ul li').eq(index%len).addClass('actives');
	});
	
	$('.out-conter').click(function(){
		$('.zzc').fadeIn();
	});
	
	$('.div-abc i').click(function(){
		$('.zzc').fadeOut();
	})

	
})
