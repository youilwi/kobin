// alert("myForm200.html");

// 제품 이름을 클릭했을 때..
$(".itemNameList").on("click", function(){
    $("#subulProductName").text($(this).text());
});

// 제품 이름에 마우스를 클릭했을 때..
$(".itemNameList").on("click", function(){
    $(this)                  //클릭 이벤트가 일어난 요소에는 
        .addClass("itemBackColor")      // 클래스를 추가하고
        .parent()                       // 그 부모 요소의
        .siblings()                     // 형제 요소 중에서 
        .children()                     // 자녀요소의
        .removeClass("itemBackColor");  // 클래스를 제거하기 
});

// 화면이 로딩될 때마다 실행되는 함수..
function myForm300Start(){
    // 업무 구분을 초기화시킨다.
    var subulProcessName = $("#subulProcessSearch option:checked").text();
    $("#subulProcessName").text(subulProcessName);
    // 생산 제품을 초기화시킨다.
    var productName = $(".itemNameList").eq(0).text();
    $("#subulProductName").text(productName);    
}
