$(document).ready(function(){
	$('.gnb li').mouseenter(function(){
		$('.depth2').stop().slideDown(500);
	});
	$('.gnb li').mouseleave(function(){
		$('.depth2').stop().slideUp(500);
	});
	setInterval(function(){
		$('.slide .slide_inner').find('li:last-child').insertBefore($('.slide .slide_inner').find('li:first-child'))
		$('.slide .slide_inner').css({'margin-top':'-300px'})
		$('.slide .slide_inner').animate({'margin-top':0},1000)
	},3000)
	$('.tab li').click(function(){
		var num = $(this).index();
		$('.c_1 div').eq(num).show().siblings().hide()
		$(this).addClass('on').siblings().removeClass('on')
	});
	$('.notice li').click(function(){
		$('#cover').show();
		$('#notice_active').stop().fadeIn(400);
	});
	$('.btn_close').click(function(){
		$('#cover').hide();
		$('#notice_active').stop().fadeOut(400);
	});
});