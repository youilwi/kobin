
// console.log("myLayout300.html");

// 6가지의 업무 구분을 클릭한 경우에..
$(".jobProcess").on("click", function(){
	// 클릭한 업무 구분을 제목에 넣는다.
	$("#subulProcessName").text($(this).text());
	// 클릭한 업무 구분의 아이디로 함수를 호출한다.
	$(this).addClass("clickedJob")
		   .siblings().removeClass("clickedJob");
});

