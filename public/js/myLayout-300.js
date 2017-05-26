
// console.log("memberForm !");

function updateProcessId(processId){
	$(".jobProcessUl > li").each(function(index, elem){
		if(processId == $(this).attr("id")){
			// check된 업무 구분의 자식인 <a>태그에 클래스를 추가한다.
			$(this).children().addClass("checkedA");
		}else{
			// 나머지 업무 구분에서는 클래스를 제거한다.
			$(this).children().removeClass("checkedA");
		}
	});
}

// 6가지의 업무 구분을 클릭한 경우에..
$(".jobProcessUl > li").on("click", function(){
	// 클릭한 업무 구분을 제목에 넣는다.
	$("#subulProcessName").text($(this).text());
	// 클릭한 업무 구분의 아이디로 함수를 호출한다.
	updateProcessId($(this).attr("id"));
});

