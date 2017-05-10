// 필수 준비 사항..
// html의 MainMenu와 menuItem 배열의 "menu 이름"은 반드시 일치해야 한다.

var menuItem = [
	{menu:"Layout", menuId:"subMenu-11", text:"myLayout-100", href:"/myForm/myLayout-100.html"},
	{menu:"Layout", menuId:"subMenu-12", text:"myLayout-200", href:"/myForm/myGrid.html"},
	{menu:"Layout", menuId:"subMenu-13", text:"myLayout-300", href:"#"},
	{menu:"Menu", menuId:"subMenu-21", text:"myMenu-100", href:"#"},
	{menu:"Menu", menuId:"subMenu-22", text:"myMenu-200", href:"#"},
	{menu:"Menu", menuId:"subMenu-23", text:"myMenu-300", href:"#"},
	{menu:"Menu", menuId:"subMenu-24", text:"myMenu-400", href:"#"},
	{menu:"Form", menuId:"subMenu-31", text:"myForm-100", href:"#"},
	{menu:"Form", menuId:"subMenu-32", text:"myForm-200", href:"#"},
	{menu:"Form", menuId:"subMenu-33", text:"myForm-300", href:"#"},
	{menu:"Table", menuId:"subMenu-41", text:"myTable-100", href:"#"},
	{menu:"Table", menuId:"subMenu-42", text:"myTable-100", href:"#"},
	{menu:"Table", menuId:"subMenu-43", text:"myTable-100", href:"#"},
	{menu:"Table", menuId:"subMenu-44", text:"myTable-100", href:"#"},
	{menu:"Calendar", menuId:"subMenu-51", text:"Calendar-100", href:"#"},
	{menu:"Calendar", menuId:"subMenu-52", text:"Calendar-100", href:"#"},
	{menu:"Login", menuId:"subMenu-61", text:"myLogin-100", href:"#"},
	{menu:"Login", menuId:"subMenu-62", text:"myLogin-200", href:"#"},
	{menu:"Login", menuId:"subMenu-63", text:"myLogin-300", href:"#"}
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
