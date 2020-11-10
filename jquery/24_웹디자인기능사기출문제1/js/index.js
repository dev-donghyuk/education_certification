$(document).ready(function(){
	setInterval(function(){
		//a.insertBefore(b) -> a요소를 b요소 앞에 갖다 놓는다
		$('.slider ul').find('li:last-child').insertBefore($('.slider ul').find('li:first-child'));
		$('.slider ul').css({'margin-left':'-960px'});
		$('.slider ul').animate({'margin-left':'0'},1000);
	},2000);
	$('.gnb li').mouseenter(function(){
		$(this).find('.depth2').stop().slideDown(400);
	});
	$('.gnb li').mouseleave(function(){
		$(this).find('.depth2').stop().slideUp(400);
	});
	$('.banner li').click(function(){
		var num = $(this).index();
		console.log(num);
		$('#cover').stop().fadeIn(400);
		$('.banner-active li').eq(num).stop().fadeIn(400);
		$('.btn_close').stop().fadeIn(400);
	});
	$('.btn_close').click(function(){
		$('#cover').stop().fadeOut(400);
		$('.banner-active li').stop().fadeOut(400);
		$(this).stop().fadeOut(400);
	});
});