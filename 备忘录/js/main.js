/**
 * Created by admin on 2017/9/6.
 */
$(function () {
    //点击进入新增页面和返回主页面
    clickevent();
    editoperation();
})

function clickevent() {
    //跳转到新增页面
    $(".hrefpage").on("click",function () {
        $("page:last").animate({
            right: "0"
        },500)
    })
    //返回到主页
    $(".callback").on("click",function () {
        $("page:last").animate({
            right: "-100%"
        },500)
    })
}
function editoperation() {
    //点击编辑
    $("#edit").on("click",function () {
        if($(".maincontent").children().length === 0){
            console.log($(".maincontent").children().length)
            return;
        }else {
            $(this).css("display","none");
            $("#cancel").css("display","block");
            $(".headtext").text("已选中0项");
            $(".hrefpage").css("display","none");
            $(".removebtn").css("display","block");
        }
    })
    // 点击取消
    $("#cancel").on("click",function () {
        if($(".maincontent").children().length === 0){
            console.log($(".maincontent").children().length)
            return;
        }else {
            $(this).css("display","none");
            $("#edit").css("display","block");
            $(".headtext").text("备忘录");
            $(".removebtn").css("display","none");
            $(".hrefpage").css("display","block");
        }
    })

}

