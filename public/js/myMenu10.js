// 필수 준비 사항..
// 1. html의 MainMenu와 menuItem 배열의 "menu 이름"은 반드시 일치해야 한다.
// 2. subMenu 페이지의 subMenuTitle은 반드시 mainMenu의 이름과 같아야 한다.

var menuItem = [
	{menu:"Layout", menuId:"subMenu-11", text:"Layout100", href:"/myForm/myLayout-100.html"},
	{menu:"Layout", menuId:"subMenu-12", text:"Layout200", href:"/myForm/myLayout-200.html"},
	{menu:"Layout", menuId:"subMenu-13", text:"Layout300", href:"/myForm/myLayout-300.html"},
	{menu:"Layout", menuId:"subMenu-14", text:"Layout400", href:"/myForm/myLayout-400.html"},
	{menu:"Menu", menuId:"subMenu-21", text:"Menu100", href:"/myForm/myMenu-100.html"},
	{menu:"Menu", menuId:"subMenu-22", text:"Menu200", href:"/myForm/myMenu-200.html"},
	{menu:"Menu", menuId:"subMenu-23", text:"Menu300", href:"/myForm/myMenu-300.html"},
	{menu:"Form", menuId:"subMenu-31", text:"Form100", href:"/myForm/myForm-100.html"},
	{menu:"Form", menuId:"subMenu-32", text:"Form200", href:"/myForm/myForm-200.html"},
	{menu:"Form", menuId:"subMenu-33", text:"Form300", href:"/myForm/myForm-300.html"},
	{menu:"Table", menuId:"subMenu-41", text:"Table100", href:"#"},
	{menu:"Table", menuId:"subMenu-42", text:"Table100", href:"#"},
	{menu:"Table", menuId:"subMenu-43", text:"Table100", href:"#"},
	{menu:"Table", menuId:"subMenu-44", text:"Table100", href:"#"},
	{menu:"Calendar", menuId:"subMenu-51", text:"Calendar1", href:"#"},
	{menu:"Calendar", menuId:"subMenu-52", text:"Calendar2", href:"#"},
	{menu:"Login", menuId:"subMenu-61", text:"Login1", href:"#"},
	{menu:"Login", menuId:"subMenu-62", text:"Login2", href:"#"},
	{menu:"Login", menuId:"subMenu-63", text:"Login3", href:"#"}
]

// 1. menuList를 만들어서 UL에 추가한다.
var makeMenu = function(){
	for(var i=0; i<menuItem.length; i++){
		var $ul = $(".subMenu .subMenuList");
		var $li = $("<li/>").attr("class", menuItem[i].menu).appendTo($ul);

		$("<a/>").attr("id", menuItem[i].menuId)	// 아이디
				.attr("href", menuItem[i].href)		// 연결 URL
				.text(menuItem[i].text)				// 텍스트
				.appendTo($li);						// ul에 붙이기..
	}
};

// 2. mainMenu 이름이 같으면 보여주고.. 다르면 안보이게 한다.
// [문제점] 서브 메뉴의 첫번째 페이지를 보이지 못하고 있다.

var showMenu = function(mainMenuName){

	// subMenuList의 처음부터 읽어서 끝까지 반복한다.
	$(".subMenuList > li").each(function(index, url){

		// 선택된 메인 메늉와 같은 서브 메뉴들만 보이도록 한다.
		if(mainMenuName == $(this).attr("class")){
			$(this).css("display", "inline-block");
			// 메인 메뉴의 첫번째 URL로 이동시킨다.
			// $(this).attr("href", menuItem[index].href);
		}else{
			$(this).css("display", "none");	
		}
	});
};

// 3. mainMenu를 클릭했을 때 subMenu 보이기..
// 페이지 이동이 없는 상태라 정상적으로 처리된다.
$(".mainMenuLi a").on("click", function(){
	clickedMainMenu = $(this).text();
	// subMenuTitle을 클릭된 메뉴 이름으로 바꾼다. 
	$("#subMenuTitle").text(clickedMainMenu);

	for(var i=0; i<menuItem.length; i++){
		showMenu(clickedMainMenu);
	}
});

// 4. subMenu를 클릭했을 때 subMenu 보이기..
// 동적으로 만드는 태그는 반드시 이 방법으로 처리한다.
// 페이지의 이동이 없는 Ajax 처리를 해야 정상적으로 처리된다.
$(document).on("click", ".subMenuList li a",function(){
	// alert("click_id = "+this.id);
	for(var i=0; i<menuItem.length; i++){
		showMenu($("#subMenuTitle").text());
	}
});

// 5. 페이지 "새로 고침"을 처리하는 시점마다 호출이 된다.
// 그래서 subMenuTitle은 반드시 mainMenu와 이름이 같아야 한다.
$(document).ready(function() { 
	// alert($("#subMenuTitle").text());
	makeMenu();	// 매 페이지 로딩 시점에 한번씩 새로 만든다.
	showMenu($("#subMenuTitle").text());
});
