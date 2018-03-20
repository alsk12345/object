$(function(){
	// 大轮播图
	var index=0;
	var len =$('.conter-ul li').length;
	var timer;
	run();
	function run(){
		timer = setInterval(function(){
			$('.conter-ul li').eq(index%len).fadeOut();
			$('.div-u li').eq(index%len).removeClass('active');
			index++;
			if(index >=len){
				index=0;
			}
			$('.conter-ul li').eq(index%len).fadeIn();
			$('.div-u li').eq(index%len).addClass('active');
		},3000);
	}
	$('.conter').mouseenter(function(){
		clearInterval(timer);

		}).mouseleave(function(){
		run();
		
	})
		// 顶部搜素栏点击
	$('.div-u li').mouseover(function(){

		$('.conter-ul li').stop(true,true);

		$('.conter-ul li').eq(index).fadeOut();
		$('.div-u li').eq(index).removeClass('active');

		index = $(this).index();

		$('.conter-ul li').eq(index).fadeIn();
		$('.div-u li').eq(index).addClass('active');
	});

	// 旅行家专栏轮播图
	$(function(){
		var index=0;
		var len = $('.header-ul .header-li').length;
		// console.log(len);
		var timer;
		run();
		$('.header-ul li:eq(0)').clone(true).appendTo($('.header-ul'));
		function run(){
			timer = setInterval(function(){
				$('.header-ol li').eq(index%len).removeClass('active');
				index++;
				if(index>=len){
					index=0;
				}
				$('.header-ol li').eq(index%len).addClass('active');
				$('.header-ul').animate({'margin-left':-260*index},300);
				// console.log('margin-left');
			},1000);
		};
		$('.header-ul').mouseover(function(){
			clearInterval(timer);
		}).mouseleave(function(){
			run();
		})
		// $('.header-ol li').mouseenter(function(){
		// 	$('.header-ul li').eq(index).removeClass('active');
		// 	$('.header-ol li').eq(index).removeClass('active');
		// 	index =$(this).index();
		// 	$('.header-ul li').eq(index).addClass('active');
		// 	$('.header-ol li').eq(index).addClass('active');
		// })
	})	
	// 最新活动轮播图
	$(function(){
		var index=0;
		var len =$('.index-ul li').length;
		var timer;
		run();
		$('.index-ul li:eq(0)').clone(true).appendTo($('.index-ul'));
		function run(){
			timer = setInterval(function(){
			$('.index-ol li').eq(index%len).removeClass('active');	   
			index++;
			if (index >= len) {
				index = 0;
			}
			$('.index-ol li').eq(index%len).addClass('active');
			$('.index-ul ').animate({'margin-left':-260*index},300);
			// console.log('margin-left');
			},2000);
		}
		$('.index-ul').mouseover(function(){
			clearInterval(timer);
			}).mouseleave(function(){
			run();
		})
	})
	// 侧边栏滑动
	$(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
       	// console.log(scrollTop);	
       	if(scrollTop < 600){
       		$('.top').hide();
       	} else{
       		$('.top').show();
       	}
       	if(scrollTop<55){
       		$('.out-conter').hide();
       	} else{
       		$('.out-conter').show();
       	}
       	if(scrollTop + $(window).height() - $('.out').offset().top >=0){
       		var dis = scrollTop + $(window).height() - $('.out').offset().top;
       		$('.position').css('bottom',dis + 20);
       	} 
           
	})
	// 筛选
	$('.thheader .data .aa .aa-xu ').click(function(){
		$('.wrapper .sx').toggle();
	})
	// 筛选中的input
	var index=0;
	var len = $('.input').length;
	console.log(len);
	$('.div-ul li').click(function(){
		$('.input').eq(index%len).show();
		console.log(99999999);
		index =$(this).index();
		$('.input').eq(index%len).hide();

		$(this).siblings().children('i').removeClass('activer-s');
		$(this).children('i').addClass('activer-s');
	})
	// 热门游记
	var index=0;
	var len= $('.data-ul .nl').length;
	console.log(len);
	$('.data-ul .nl').click(function(){
		$('data-ul .nl').eq(index%len).removeClass('activer');
			console.log($('data-ul .nl').eq(index%len).removeClass('activer'));
		// index = $(this).index();
		index++;
		$('data-ul .li').eq(index%len).addClass('activer');
		
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

	// $(function(){
	// 	function lazyLoading(){
	// 		console.log($('.images').lenght);
	// 		$('.images').each(function(value,key){
	// 			if($(this).offset().top < $(window).scrollTop()
	// 				+ $(window).height()){
	// 				var newSrc = $(this).attr('data-src');

	// 				$(this).attr('src',newSrc);

	// 				$(this).removeClass("images");

	// 				$(this).hide().fadeIn(1000);
	// 			}
	// 		})
	// 	}
	// 	lazyLoading();
	// 	$(window).scrollTop(function(){
	// 		lazyLoading();
	// 	})
	// })
})
