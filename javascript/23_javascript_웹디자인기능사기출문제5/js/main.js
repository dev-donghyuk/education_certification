$(document).ready(function(){
	$('.gnb li').mouseenter(function(){
		$(this).find('.depth2').stop().fadeIn(400);
	})
	$('.gnb li').mouseleave(function(){
		$(this).find('.depth2').stop().fadeOut(400);
	})
	setInterval(function(){
		$('.slide .slide_inner').find('li:last-child').insertBefore($('.slide .slide_inner').find('li:first-child'));
		$('.slide .slide_inner').css({'margin-left':'-1200px'});
		$('.slide .slide_inner').animate({'margin-left':'0'},1000);
	},3000)
	$('.notice ul li').click(function(){
		$('#notice_active').stop().fadeIn(400);
		$('#cover').stop().fadeIn(400);
	})
	$('.btn_close').click(function(){
		$('#notice_active').stop().fadeOut(400);
		$('#cover').stop().fadeOut(400);
	})
})