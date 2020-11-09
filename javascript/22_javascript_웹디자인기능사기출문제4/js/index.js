$(document).ready(function(){
	$('.gnb li').mouseenter(function(){
		$('.depth2').stop().slideDown(400);
		$('.depth2_cover').stop().slideDown(400);
	})
	$('.gnb li').mouseleave(function(){
		$('.depth2').stop().slideUp(400);
		$('.depth2_cover').stop().slideUp(400);
	})
	setInterval(function(){
		$('.slide .slide_inner').find('li:last-child').insertBefore($('.slide .slide_inner').find('li:first-child'));
		$('.slide .slide_inner').css({'margin-top':-300});
		$('.slide .slide_inner').animate({'margin-top':0},1000);
	},3000)
	$('.notice li').click(function(){
		$('#cover').show();
		$('#notice_active').stop().fadeIn(400);
	});
	$('.btn_close').click(function(){
		$('#cover').hide();
		$('#notice_active').stop().fadeOut(400);
	});
	$('.btn_family').click(function(){
		$(this).toggleClass('on').next().stop().slideToggle(400);
	})
});