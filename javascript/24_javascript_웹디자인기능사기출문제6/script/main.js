$(document).ready(function(){
	$(function(){
		$('.gnb li').mouseenter(function(){
			$(this).find('.depth2').stop().fadeIn(400);
		});
		$('.gnb li').mouseleave(function(){
			$(this).find('.depth2').stop().fadeOut(400);
		});


		$('.slide li').eq(num).siblings().hide();
		var num = 0;
		setInterval(function(){
			if(num<2){
				num++
			}else{
				num = 0;	
			}
			$('.slide li').eq(num).fadeIn(400).siblings().fadeOut(400);
		},3000);

		$('.btn_tab li').click(function(){
			var num = $(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			$('.c_1>div').eq(num).show().siblings('div').hide();
		});

		$('.btn_family').click(function(){
			$(this).toggleClass('on')
			$('.family_list').stop().slideToggle(400);
		});
		$('.notice li').click(function(){
			$('#cover').fadeIn(400);
			$('#notice_active').fadeIn(400);
		});
		$('.btn_close').click(function(){
			$('#cover').fadeOut(400);
			$('#notice_active').fadeOut(400);
		});
	})
});