// 달력을 설정하는 스크립트입니다. 
var today = new Date();					// 오늘
var startDate = new Date();				// 달력의 시작일자

function makeCalendar(){
	var yyyy, mm, dd;
	// 시간으로 계산해서 날자를 설정해야 정상적인 값이 설정된다.
	// 허루에 해당하는 '1/1000' 초에서 시작한다.
	for(var i=0; i<21; i++){
		var dayTime = 1000*60*60*24;	// 초/분/시간/일
		var feature = new Date(startDate.getTime() + (dayTime)*i);
		yyyy = feature.getFullYear();
		mm = feature.getMonth();
		dd = feature.getDate();
		$(".calendarDate > #cal"+(i+1)).text(dd);
	}
}

$("#beforeWeek").on("click", function(){
	startDate.setDate(startDate.getDate() - 7);
	makeCalendar();
});

$("#searchWeekNo").on("click", function(){
	alert($("#weekNo").val())
	startDate.setDate(startDate.getDate() - 7);
	makeCalendar();
});

// 의미는 같지만.. 만들어지는 시점 때문에.. 아주 중요하다.
// document 객체가 만들어진 후에는 언제든지.. 이벤트 발생.
$(document).on("click", "#nextWeek", function(){
	startDate.setDate(startDate.getDate() + 7);
	makeCalendar();
});

window.onload=function(){
	startDate.setDate(today.getDate() - today.getDay() - 7);
	makeCalendar();
	$("#displayYear").text(today.getFullYear());
	$("#displayMonth").text(today.getMonth()+1);
}
