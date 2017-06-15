// alert("myForm200.html");

// 업무구분 change 여부 확인
$("#subulProcessSearch").on("change", function(){
    alert("subulProcessSearch");
});

/*
// 6가지의 업무 구분을 클릭한 경우에..
$(".jobProcess").on("click", function(){
	// 클릭한 업무 구분을 제목에 넣는다.
	$("#subulProcessName").text($(this).text());
	// 클릭한 업무 구분의 아이디로 함수를 호출한다.
	$(this).addClass("clickedJob")
		   .siblings().removeClass("clickedJob");
});

$(".itemCodeListTr").on("click", function(){
    setSubulItem($(this).children().eq(0).text(), 
        $(this).children().eq(1).text(), 
        $(this).children().eq(2).text());
});

function setSubulItem(itemCode, itemName, date) {
    // alert(itemCode+", "+itemName+", "+date);
    $("#subulItemCode").text(itemCode);
    $("#subulItemName").text(itemName);
    $("#governItemCode").text(date);
}

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

*/