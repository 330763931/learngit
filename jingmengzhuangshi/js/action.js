$(function(){
	//分类显示隐藏
	var li = $(".cate_menu_item");
	var show = $(".cate_poplist").children();
		li.mouseenter(function(){
			var index = $(this).index();
			show[index].style.display = 'block';
	})
	$(".banner_co").mouseleave(function(){
		show.hide();
	})
	//秒杀轮播
	
})
