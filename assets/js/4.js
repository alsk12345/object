$(function(){
	// 轮播图
	var index = 0;
	var len = $('.swiper-ul li').length;
	console.log(len);
	var timer;
	run();
	$('.swiper-ul li:eq(0)').clone(true).appendTo($('.swiper-ul'));
	function run(){
		timer = setInterval(function(){
			$('.swiper-ol li').eq(index%len).removeClass('active');
			
			index++;
			if(index >len){
				index =1;
				$('.swiper-ul').css('margin-left',0);
				
			}
			$('.swiper-ol li').eq(index%len).addClass('active');
			$('.swiper-ul').animate({'margin-left':-700*index},300);

		},2000);
	}
	$('.swiper').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		run();
	})
	// })
	// $('.swiper-ol li').click(function(){
	// 	$('.swiper-ol li').eq
	// })

	// 旅游攻略导航点击事件
	$('.menu .menu-ul .asd').click(function(){
		$('.menu-ul-one').toggle();
	});
	$('.menu .menu-ul .vb').click(function(){
		$('.menu-ul-two').toggle();
	});
	$('.menu .menu-ul .nm').click(function(){
		$('.menu-ul-three').toggle();
	});

	// 头部搜索栏
	$('.nav-xc-x .input').click(function(){
		$('.input').animate({'width':335},300);
		console.log(2333);
		// $('.nav-xc-x .input .input-a').css({'background-position':' -30px -140px!important;'});
	});
	
	$('.nav-xc-x .input').blur(function(){
		console.log(111);
		$('.input').animate({'width':100},300);
	})
	$('.nav-xc-x .input').focus(function(){
		$('.input').css({'border':'1px solid #ff9d00','background':'#fff','box-shadow':'#ff9d00'})
		console.log(11111);
		
	})

	// 侧边栏
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

	// 遮罩层
		$('.out-conter').click(function(){
			// $('position').hide();
			$('.zzc').fadeIn();
			// console.len(78787);
		});

		$('.div-abc i').click(function(){
			$('.zzc').fadeOut();
		})
	// $('.edc .edc-a').click(function(){
	// 	$('.edc .edc-a').animate({'margin-top':3089+'px'});
	// })
}) 




