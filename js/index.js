$(".category-item").hover(function(){
	$(".category-item").removeClass("current")
	$(this).addClass("current")
})

$(".heart").click(function(){
	$(this).toggleClass("h-ani")
	if($(this).hasClass("h-ani")){
		$("body").append("<div class='alert'>成功追蹤</div>")
	}
	else{
		$("body").append("<div class='alert'>取消追蹤</div>")
	}
})

$(".infor-icon img").click(function(){
	$(".infor").removeAttr("style")
	var divClass = $(this).attr("data-for")
	$("." + divClass).css("transform","rotate(0deg)")
})

$(".infor img").click(function(){
	$(".infor").removeAttr("style")
})

shop = 0

$(".btn-s").click(function(){
	if(confirm("確認是否加入購物車")){
		shop++
		$(".cart .nav-b span").text("購物車("+shop+")")
		$("body").append("<div class='alert'>成功加入購物車</div>")
	}
	else{
		$("body").append("<div class='alert'>取消加入購物車</div>")
	}
})

$("#item1").click(function(){
	$("#shop1").fadeIn()
	$("#shop2,#shop3,#shop4").fadeOut()
})

$("#item2").click(function(){
	$("#shop2").fadeIn()
	$("#shop1,#shop3,#shop4").fadeOut()
})

$("#item3").click(function(){
	$("#shop3").fadeIn()
	$("#shop2,#shop1,#shop4").fadeOut()
})

$("#item4").click(function(){
	$("#shop4").fadeIn()
	$("#shop2,#shop3,#shop1").fadeOut()
})

$(".login img").click(function(){
	$(".login").fadeOut()
})

$(".cart").click(function(){
	$("#login").fadeIn()
})

$(".nav-login").click(function(){
	$("#login").fadeIn()
})

$(".p1").click(function(){
	$("#login").fadeOut()
	$("#register").fadeIn()
})

$(".btn-e").click(function(){
	$("#signup").fadeIn()
})

$("#login").submit(function(){
	alert("目前沒有網路請稍後在試")
	$(".login").fadeOut()
	$(".login input").val("");
	return false
})

$("#signup").submit(function(){
	alert("資料已送出")
	$(".login").fadeOut()
	$(".login input").val("");
	return false
})

$("#register").submit(function(){
	alert("資料已送出")
	$(".login").fadeOut()
	$(".login input").val("");
	return false
})

$("#form1,#form2").submit(function(){
	alert("資料已送出")
	$("#form1 input,#form2 input").val("");
	return false
})

$(".f3 img").click(function(){
	alert("目前沒有網路請稍後在試")
})