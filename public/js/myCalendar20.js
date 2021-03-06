// 달력을 설정하는 스크립트입니다. 
// 오늘 날자와 시작 일자는 전역변수로 설정해서 공유합니다.
var today = new Date();				// 오늘
var startDate = new Date();			// 달력의 시작일자
var calendarDates = [];				// 달력의 날자 배열..
var firstDate = today.getFullYear()+"-"+today.getMonth()+"-"+1;
var firstDay = new Date(firstDate).getDay(); // 1월 1일의 요일

// 3주간의 달력 일자를 설정하는 함수..
function makeCalendar(displayYear, displayMonth){
	//alert("makeCalendar()");

	// 시간으로 계산해서 날자를 설정해야 정상적인 값이 설정된다.
	// 허루에 해당하는 '1/1000' 초에서 시작한다.
	for(var i=0; i<21; i++){
		// 초, 분, 시간, 일 숫자를 모두 곱하면 1일의 16진수 값이다.
		var dayTime = 1000*60*60*24;
		// 시작 일자의 시간 데이터를 받아서 1일씩 더하는 계산이다.
		var feature = new Date(startDate.getTime() + (dayTime)*i);

		// 배열에 만들어진 날자 데이터를 저장한다.
		calendarDates[i] = feature;

		// 3주간의 달력을 설정한다.
		$(".calendarDate #cal"+(i)).text(feature.getDate());

		if(today.getDate() == calendarDates[i].getDate()){
			$(".calendarDate #cal"+(i)).addClass("todayDate");
		}else{
			$(".calendarDate #cal"+(i)).removeClass("todayDate");
		}
	}
    // 년, 월 정보를 변경해 준다..
    $("#displayYear").text(displayYear);
    $("#displayMonth").text(displayMonth+1);

    // 수불 년,월,일 정보도 초기화시킨다.
    $("#subulYear").text(displayYear);
    $("#subulMonth").text(displayMonth+1);
    $("#subulDate").text(today.getDate());
}

// 월과 요일(0~6)을 받아서 년간 주번호를 계산하는 함수..
function makeWeekNo(selectedMonth, selectedDay){
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

    // weekCount = (월말합계 - 1월1일의 요일 + 금일의 날자) / 7
    var weekCount = (monthSum + firstDay + today.getDate()) / 7;
    //alert(Math.ceil(1/7));

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

	// 이전주를 클릭하면 'clickedDate class'를 모두 지운다.
	$(".calDate").siblings().removeClass("clickedDate");
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

	// 다음주를 클릭하면 'clickedDate class'를 모두 지운다.
	$(".calDate").siblings().removeClass("clickedDate");
});

// 의미는 같지만.. 만들어지는 시점 때문에.. 아주 중요하다.
// document 객체가 만들어진 후에는 언제든지.. 이벤트 발생.
$(document).on("click", ".calDate", function(){	
	$(this).addClass("clickedDate")		// 클래스 추가하고
		   .siblings()					// 형제에서는 
		   .removeClass("clickedDate");	// 클래스를 제거하기..

	// 수불 일자를 설정한다.
	var id_value = $(this).attr("id");	// id 속성 값 받기..
	var index = id_value.substring(3,5);// 숫자만 받아오기..
	$("#subulYear").text(calendarDates[index].getFullYear());
	$("#subulMonth").text(calendarDates[index].getMonth()+1);
	$("#subulDate").text(calendarDates[index].getDate());
});

// 화면이 로딩될 때마다 실행되는 함수..
window.onload=function(){
	// 시작 일자를 설정하고..
	startDate.setDate(today.getDate() - today.getDay() - 7);
	// 화면의 달력 정보를 설정한다.
	makeCalendar(today.getFullYear(), today.getMonth());
	// 화면의 주 번호를 설정한다.
	makeWeekNo(today.getMonth(), today.getDay());
	// myForm200 폼 초기 실행..
	myForm300Start();
}
