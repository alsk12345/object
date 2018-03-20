$(function(){
	$('.username').focus(function(){
		$('.username').addClass('active');
		console.log(111);
	}).blur(function(){
		$('.username').removeClass('active');
		var value = $(this).val().trim();
		if( value.length == 0){
			$('.tips').html('帐号不能为空');
			$('.xhu').show();
			console.log(444);
		}
	})
	$('.password').focus(function(){
		$('.password').addClass('active');
	}).blur(function(){
		$('.password').removeClass('active');
		var value = $(this).val().trim();
		if( value.length == 0){
			$('.tips').html('密码不能为空');
			console.log(333);
			$('.xhu').show();
		}
	})
	// $('.input').blur(function(){
	// var reg = /^\w+$/;
	

	// })




})