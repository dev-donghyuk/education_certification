$(document).ready(function(){
	setInterval(function(){
		$('.slide .slide_inner').find('li:last-child').insertBefore($('.slide ul').find('li:first-child'));
		$('.slide .slide_inner').css({'margin-left':'-960px'});
		$('.slide .slide_inner').animate({'margin-left':'0'},1000);
	},2000);
	$('.gnb li').mouseenter(function(){
		$(this).find('.depth2').stop().slideDown(400);
	})
	$('.gnb li').mouseleave(function(){
		$(this).find('.depth2').stop().slideUp(400);
	})
});
