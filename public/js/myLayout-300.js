
// console.log("myLayout300.html");

// 6가지의 업무 구분을 클릭한 경우에..
$(".jobProcess").on("click", function(){
	// 클릭한 업무 구분을 제목에 넣는다.
	$("#subulProcessName").text($(this).text());
	// 클릭한 업무 구분의 아이디로 함수를 호출한다.
	$(this).addClass("clickedJob")
		   .siblings().removeClass("clickedJob");
});

// 1. 입력되는 숫자를 3자리마다 콤마(,)를 넣은 숫자로 리턴한다.
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 2. 입력되는 숫자를 3자리마다 콤마(,)를 넣은 숫자로 리턴한다.
function comma(num){
    var len, point, str; 
       
    num = num + ""; 
    point = num.length % 3 ;
    len = num.length; 
   
    str = num.substring(0, point); 
    while (point < len) { 
        if (str != "") str += ","; 
        str += num.substring(point, point + 3); 
        point += 3; 
    }     
    return str; 
}

