// 달력을 설정하는 스크립트입니다. 
// 오늘 날자와 시작 일자는 전역변수로 설정해서 공유합니다.
var today = new Date();					// 오늘
var startDate = new Date();				// 달력의 시작일자

// 3주간의 달력 일자를 설정하는 함수..
function makeCalendar(displayYear, displayMonth){
	//alert("makeCalendar()");

	// 시간으로 계산해서 날자를 설정해야 정상적인 값이 설정된다.
	// 허루에 해당하는 '1/1000' 초에서 시작한다.
	for(var i=0; i<21; i++){
		// 초, 분, 시간, 일 숫자를 모두 곱하면 1일의 16진수 합이다.
		var dayTime = 1000*60*60*24;
		// 시작 일자의 시간 데이터를 받아서 1일씩 더하는 방식이다.
		var feature = new Date(startDate.getTime() + (dayTime)*i);

		// 3주간의 달력을 성정한다.
		if(feature.getDate() <= 9){
			$(".calendarDate #cal"+(i+1)).text("0"+feature.getDate());
		}else{
			$(".calendarDate #cal"+(i+1)).text(feature.getDate());
		}

		if(feature.getDate() == today.getDate()){
			$(".calendarDate #cal"+(i+1))
				.parent().addClass("todayDate")
				.siblings().removeClass("todayDate");
		}
	}

    // 년, 월 정보를 변경해 준다..
    $("#displayYear").text(displayYear);
    $("#displayMonth").text(displayMonth+1);
}

// 월과 요일(0~6)을 받아서 년간 주번호를 계산하는 함수..
function makeWeekNo(selectedMonth, selectedDay){
	//alert("makeWeekNo()");

	var last = [31,28,31,30,31,30,31,31,30,31,30,31];
	var year = today.getFullYear();
	// ("윤년 !")에 대해서 2월의 마지막 날자를 조정한다.
	if (( year % 4 == 0 && year % 100 != 0 ) || 
	        ( year % 400 == 0 && year % 4000 != 0 )) { 
	    last[1] = 29;
	}

    var monthSum = 0;   
    // 선택된 월보다 작은 달들의 날자 합계
    for(var i=0; i<selectedMonth; i++){
        monthSum += last[i];
    }
    // 년간 주 번호의 계산식: (전월까지의 합 + tr번호*7) / 7
    var weekCount = (monthSum + (selectedDay*7)) / 7;
    $("#displayWeek1").text(Math.floor(weekCount));
    $("#displayWeek2").text(Math.floor(weekCount + 2));
}

// 이전주를 클릭하면 처리하는 함수
$("#beforeWeek").on("click", function(){
	startDate.setDate(startDate.getDate() - 7);
	// 3주간의 달력을 성정한다.
	makeCalendar(startDate.getFullYear(), startDate.getMonth());
	// 주 번호를 설정한다.
	var tmp = parseInt($("#displayWeek1").text());
	$("#displayWeek1").text(tmp-1);
	$("#displayWeek2").text(tmp+1);
});

// 다음주를 클릭하면 처리하는 함수
$("#nextWeek").on("click", function(){
	startDate.setDate(startDate.getDate() + 7);
	// 3주간의 달력을 성정한다.
	makeCalendar(startDate.getFullYear(), startDate.getMonth());
	// 주 번호를 설정한다.
	var tmp = parseInt($("#displayWeek1").text());
	$("#displayWeek1").text(tmp+1);
	$("#displayWeek2").text(tmp+3);
});

$(document).on("click", ".calendarTableTr > td > a", function(){
	var id = $(this).attr("id");
	alert(".calendarTableTr > td > a = "+id);

	$("#"+id).parent().addClass("clickedDate")	// 부모는 추가
	.siblings().removeClass("clickedDate");		// 형제는 제거
});

// 의미는 같지만.. 만들어지는 시점 때문에.. 아주 중요하다.
// document 객체가 만들어진 후에는 언제든지.. 이벤트 발생.
// 주번호를 입력하고 찾기 버튼을 누르면 처리하는 건 다음에..
// $(document).on("click", "#searchWeekNo", function(){
// });

// 화면이 처음으로 로딩될 때 실행하는 함수..
window.onload=function(){
	// 시작 일자를 설정하고..
	startDate.setDate(today.getDate() - today.getDay() - 7);
	// 화면의 달력 정보를 설정한다.
	makeCalendar(today.getFullYear(), today.getMonth());
	// 화면의 주 번호를 설정한다.
	makeWeekNo(today.getMonth(), today.getDay());
}
