$(function(){
	//轮播图
	layui.use('carousel', function() {
		var carousel = layui.carousel;
		//建造实例
		carousel.render({
			elem: '#banner',
			width: '100%' //设置容器宽度
				,
			arrow: 'always' //始终显示箭头
				,
			anim: 'default' //切换动画方式
				,
			arrow: "none"
		});
	});
	//页面滚动
	//var top = $("body,html").scrollTop();
	$(window).scroll(function() {
		if($(window).scrollTop()>$('#banner').height()){
			$('header').css({
				'top':'0'
			})
			$('.tabs-bar').css({
				'position' : 'fixed',
				'top':$('header').height()
			})
		}else{
			$('.tabs-bar').css({
				'position' : 'static'
			})
			$('header').css({
				'top':-($('header').height())
			})
		}
	  	//console.log($(document).scrollTop())
	});
	//选项卡
	$('.tabs-nav').on('click','li',function () {
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).data('num')){
			$('.tab-ink-bar-wrapper').css({
				"transform":"translate3d("+$('.tab-ink-bar-wrapper').width()+"px,0,0)"
			})
		}else{
			$('.tab-ink-bar-wrapper').css({
				"transform":"translate3d(0%,0,0)"
			})
		}
	})
})
