// 当点击聚焦的时候输入内容
// 失去焦点的时候验证输入的是否正确
// 	1.不输入内容，也验证
// 	2.手机号格式必须规范
// 	输入不正确的时候将显示:手机号码格式bu正确
$(function(){
	$('.input').focus(function(){
		$('.input').addClass('active');
		console.log(111);
	}).blur(function(){
		$('.input').removeClass('active');
		var value = $(this).val().trim();
		if(value.length == 0){
			$('.tips').html('手机号码不能为空');
			$('.xhu').show();
			return;
			console.log(888);
		}

		var reg1 = /^[0-9]{11}$/;

		if(reg1.test(value)){
			$('.tips').html(' ');
			$('.xhu').hide();
			console.log(222);
		}else{
			$('.tips').html('手机号码格式不正确');
			$('.xhu').show();

		}



		// var reg1=/^(13[0-9]|14[57]|15[012356789]|17[35678]|18[0-9]|199)[0-9]{8}$/;
		// if(reg1.test(value)){
		// 	$('.tips').html('手机号码格式不正确');
		// }
	})
})