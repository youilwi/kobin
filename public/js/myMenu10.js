// 필수 준비 사항..
// html의 MainMenu와 menuItem 배열의 "menu 이름"은 반드시 일치해야 한다.

var menuItem = [
	{menu:"Layout", menuId:"subMenu-11", text:"Layout100", href:"/myForm/myLayout-100.html"},
	{menu:"Layout", menuId:"subMenu-12", text:"Layout200", href:"/myForm/myLayout-200.html"},
	{menu:"Layout", menuId:"subMenu-13", text:"Layout300", href:"/myForm/myLayout-300.html"},
	{menu:"Layout", menuId:"subMenu-14", text:"Layout400", href:"/myForm/myGrid.html"},
	{menu:"Menu", menuId:"subMenu-21", text:"Menu100", href:"#"},
	{menu:"Menu", menuId:"subMenu-22", text:"Menu200", href:"#"},
	{menu:"Menu", menuId:"subMenu-23", text:"Menu300", href:"#"},
	{menu:"Form", menuId:"subMenu-31", text:"Form100", href:"#"},
	{menu:"Form", menuId:"subMenu-32", text:"Form200", href:"#"},
	{menu:"Form", menuId:"subMenu-33", text:"Form300", href:"#"},
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

var makeMenu = function(mainMenu, selectedMenuItem){
	// menuList를 만들어서 UL에 추가한다.
	var $ul = $(".subMenu .subMenuList");
	var $li = $("<li/>").attr("class", selectedMenuItem.menu)
						.appendTo($ul);

	$("<a/>").attr("id", selectedMenuItem.menuId)	// 아이디
			.attr("href", selectedMenuItem.href)	// 연결 URL
			.text(selectedMenuItem.text)			// 텍스트
			.appendTo($li);					// ul에 붙이기..

	if(mainMenu != selectedMenuItem.menu){	// 첫 메뉴가 아니면..
		$li.css("display", "none");
	}
};

// subMenu의 menuItem을 만드는 함수를 호출한다.
for(var i=0; i<menuItem.length; i++){
	makeMenu(menuItem[0].menu, menuItem[i]);
}

$(".mainMenuLi a").on("click", function(){
	//alert("mainMenu li a is clicked..");

	var selectedMainMenu = $(this).text();	// 이곳의 this..
	$("#subMenuTitle").text(selectedMainMenu);
	
	$(".subMenuList li").each(function(index, url){
		if(selectedMainMenu == $(this).attr("class")){
			$(this).css("display", "inline-block"); // 이곳의 this..
		}else{
			$(this).css("display", "none");			// 다르다...
		}
	});
});
