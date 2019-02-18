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
new Vue({
	el : '.main',
	data : {
		msg : '我是根实例',
		curTab : '正在热映',
		nowFilmList : [
			{
				id : 1,
				url:'images/nowfilm/1.jpg',
				name:'流浪地球',
				type:'2D',
				grade : '7',
				actor:'郭帆 屈楚萧 李光洁 吴孟达  赵今麦',
				time : '100分钟',
				place: '中国大陆',
			},
			{
				id : 2,
				url:'images/nowfilm/1.jpg',
				name:'流浪地球',
				type:'2D',
				grade : ' ',
				actor:'郭帆 屈楚萧 李光洁 吴孟达  赵今麦',
				time : '100分钟',
				place: '中国大陆',
			},
			{
				id : 3,
				url:'images/nowfilm/1.jpg',
				name:'流浪地球',
				type:'2D',
				grade : '7',
				actor:'郭帆 屈楚萧 李光洁 吴孟达  赵今麦',
				time : '100分钟',
				place: '中国大陆',
			}
		],
		soonFilmList : [
			{
				id : 1,
				url:'images/coming-soon/1.jpg',
				name:'流浪地球',
				type:'2D',
				grade : '&nbsp',
				actor:'郭帆 屈楚萧 李光洁 吴孟达  赵今麦',
				time : '100分钟',
				place: '中国大陆',
			},
		]
	},
	methods : {
		tabChange(tab){
			//console.log(list)
			this.curTab = tab
		}
	}
})
