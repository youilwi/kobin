// Current Date()를 가져온다.

function makeDate(){
	var today = new Date();					// today

	var year = today.getFullYear();			// year
	var month = today.getMonth();			// month
	var date = today.getDate();				// date
    var day = today.getDay();				// today 요일

	var startDate = new Date();				// 달력의 시작일자.
	startDate.setDate(today.getDate() - today.getDay() - 7);
	alert(startDate.toLocaleString());

	var yyyy = startDate.getFullYear();
	var mm = startDate.getMonth();
	var dd = startDate.getDate();

	// 시간으로 계산해서 날자를 설정해야 제 값이 설정된다.
	for(var i=0; i<21; i++){
		// 허루에 해당하는 '1/1000' 초에서 시작한다.
		var dayTime = 1000*60*60*24;		// 초-분-시간-일
		var feature = new Date(startDate.getTime() + (dayTime)*i);
		yyyy = feature.getFullYear();
		mm = feature.getMonth();
		dd = feature.getDate();
		// console.log(feature.toLocaleString());
		// console.log(i+") "+yyyy+"-"+mm+"-"+dd);
		
	}
	console.log($("#cal1").text());
}

// 만들어지는 시점 때문에.. 아주 중요합니다.
// document 객체가 만들어진 후에는 언제라도.. 이벤트 발생..
$(document).on("click", ".clickedDate", function(){
	 console.log("click ~");
	 makeDate();
});

// 전체 실행..
window.onload=function(){
	//makeDate();
}
