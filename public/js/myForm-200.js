// alert("myForm200.html");

// 업무구분 change 여부 확인..
$("#subulProcessSearch").on("change", function(){
    var subulProcessName = $("#subulProcessSearch option:checked").text();
    $("#subulProcessName").text(subulProcessName);
});

// 제품 이름을 클릭했을 때..
$(".itemNameList").on("click", function(){
    $("#subulProductName").val($(this).text());
});

// 제품 이름에 마우스를 올렸을 때..
$(".itemNameList").on("click", function(){
    $(this)                  //클릭 이벤트가 일어난 요소에는 
        .addClass("grayBackColor")      // 클래스를 추가하고
        .parent()                       // 그 부모 요소의
        .siblings()                     // 형제 요소 중에서 
        .children()                     // 자녀요소의
        .removeClass("grayBackColor");  // 클래스를 제거하기 
});

// 고객 이름에 마우스를 올렸을 때..
$(".subulListCustomer").on("click", function(){
    $(this)                  //클릭 이벤트가 일어난 요소에는 
        .addClass("grayBackColor")      // 클래스를 추가하고
        .parent()                       // 그 부모 요소의
        .siblings()                     // 형제 요소 중에서 
        .children()                     // 자녀요소의
        .removeClass("grayBackColor");  // 클래스를 제거하기 
});

$("#subulInputQty").on("keyup", function(){
    var checkNum = checkNumber($(this).val());
    var regExp = /^[0-9 | \,? | 0-9 | \.? | 0-9]{10}$/;
    if(regExp.test(checkNum)){
        alert("1. "+regExp.test(checkNum));
    }else{
        alert("2. "+regExp.test(checkNum));
    }
});
// 사용자가 Key를 입력할 때마다 Function 호출..
function checkNumber (data) {
    var num = data;
    if ( data.length > 8 ) {
        num = data.substring(0,8);
    } else {
        // Number형이 아닌 입력값은 null값으로 대체..
        num = data.replace(/[^0-9]/g, '');
    }
    alert(num);
    return num;
}

// 화면이 로딩될 때마다 실행되는 함수..
function myForm200Start(){
    // 업무 구분을 초기화시킨다.
    var subulProcessName = $("#subulProcessSearch option:checked").text();
    $("#subulProcessName").text(subulProcessName);
    // 생산 제품을 초기화시킨다.
    var productName = $(".itemNameList").eq(0).text();
    $("#subulProductName").val(productName);    
}
