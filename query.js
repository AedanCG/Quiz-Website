$(document).ready(function() {
	$("h1").click(function(){
		//$("p").toggle();
		$("p").css({"color":"red", "background-color":"yellow"});
		$("img").css({"border":"2px solid red"});
	});
	
	$(".p1").click(function(){
		$(".p2").toggle();
		//$("img").toggle();
	});
	
	$(".p2").click(function(){
		$(".p3").toggle();
	});
	
	$(".p3").click(function(){
		$(".p4").toggle();
	});
});
