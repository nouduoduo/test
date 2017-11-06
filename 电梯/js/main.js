/**
 * Created by admin on 2017/9/6.
 */
$(function () {
    clickevent();
});
function clickevent() {
    $(".upper,.lower").on("click", function () {
        //获取父级的下标
        var listcount = $(this).parents(".numbercount").index();
        var postop = $(this).parents(".numbercount").position().top;
        //当点击按钮时按钮亮灯
        $(this).css("background", "#e3e3e3");
        var state = $(this);
        //   执行动画移动
        $(".move").animate({
            "top": listcount * 122 + "px",
        }, 2000, function () {
            //延时取消亮灯
            setTimeout(function () {
                state.css("background", "#fff");
                //当动画移动的效果停止后
                //左
                $(".move").removeClass("colorbg");
                $(".move>div:first").animate({
                    left :"-100px"
                }, 2000,function () {
                    setTimeout(function () {
                        $(".move>div:first").animate({
                            left :"0"
                        },1000)
                    },500)
                })
                //右
                $(".move>div:last").animate({
                    right :"-100px"
                }, 2000,function () {
                    setTimeout(function () {
                        $(".move>div:last").animate({
                            right :"0"
                        },1000);
                        setTimeout(function () {
                            $(".move").addClass("colorbg");
                        },1000)

                    },500)
                })
            })
        })
    })
}
