$(function() {
//分类显示隐藏
var li = $(".cate_menu_item");
var show = $(".cate_poplist").children();
li.mouseenter(function() {
	var index = $(this).index();
	show[index].style.display = 'block';
})
$(".banner_co").mouseleave(function() {
	show.hide();
})
//秒杀轮播

var ul = $(".second_ul")[0]; //图片下面的li
function change() {
	return setInterval(function() {
		if(ul.style.left == "-1000px") {
			moveRight();
		} else {
			moveLeft();
		}
	}, 4000);
}
//点击右边
function moveRight() {

	ul.style.left = "0px";

}

//点击左边
function moveLeft() {

	ul.style.left = "-1000px";

}
//事件绑定

$('.sk_controls_prev').on('click', moveRight);

$('.sk_controls_next').on('click', moveLeft);

//定时器
var time = change();
//鼠标经过
$(".second_top").hover(function() {
	clearInterval(time);
}, function() {
	change();
})

//淡出淡入
var size = $('.special_list li').size();

$('.special_list li').eq(0).show();
$('.special_indlist li').eq(0).addClass('active');
$('.special_indlist li').mouseover(function() {
	$(this).addClass('active').siblings().removeClass('active');
	var index = $(this).index();
	i = index;
	$('.special_list li').eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
})
//自动播放
var i = 0;
var t = setInterval(move, 2000);
//自动播放核心函数
function move() {
	i++;
	if(i > size - 1) {
		i = 0;
	}
	$('.special_indlist li').eq(i).addClass('active').siblings().removeClass('active');
	$('.special_list li').eq(i).fadeIn(1000).siblings().fadeOut(1000);
}

//鼠标移入移除
$('.sk_special').hover(function() {
	clearInterval(t);
}, function() {
	t = setInterval(move, 2000);
})
//产品分类轮播

 var len = $(".center_buttom_l").size();

//手动控制轮播效果

$(".center_buttom_l").eq(0).show();

$(".sup_ind li").eq(0).addClass('active');

$(".sup_ind li").mouseover(function(){
	
	 $(this).addClass("active").siblings().removeClass("active");
            
            var index2 = $(this).index();
           
           z = index2;
          
          $(".center_buttom_l").eq(index2).stop().fadeIn(300).siblings().fadeOut(300);

})
   //自动
        var z = 0;
        
        var ti = setInterval(move2, 2000);
        
        //核心向左的函数
        function moveLeft2() {
            z--;
            if (z == -1) {
                  z = len-1;
            }
             $(".sup_ind li").eq(z).addClass("active").siblings().removeClass("active");
             $(" .center_buttom_l").eq(z).fadeIn(300).siblings().fadeOut(300);

        }
         //核心向右的函数
        function move2() {
            z++;
            if (z == len) {
                z = 0;
            }
            $(".sup_ind li").eq(z).addClass("active").siblings().removeClass("active");
            $(".center_buttom_l").eq(z).fadeIn(300).siblings().fadeOut(300);

        }
         //定时器的开始与结束
        $(".mate_center_buttom").hover(function() {
            clearInterval(ti);
        }, function() {
            ti = setInterval(move2, 2000)
        })
        //左边按钮的点击事件
        $(".sup_btn_p").click(function() {
            moveLeft2();
        })
        //右边按钮的点击事件
        $(".sup_btn_n").click(function() {
            move2();
        })
})