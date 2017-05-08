
// console.log("memberForm !");

var memberInfo = [ 
	{no:1, name:"이정우", mobile:"010-6232-4914", email:"oli999@naver.com", ip:"192.168.0.122"},
	{no:2, name:"김종태", mobile:"", email:"vigabhan1231@gmail.com", ip:"192.168.0.75"},
	{no:3, name:"이나영", mobile:"", email:"nayounglee8867@gmail.com", ip:"192.168.0.111"},
	{no:4, name:"신원영", mobile:"010-9218-9405", email:"shinho0505@gmail.com", ip:"192.168.0.114"},
	{no:5, name:"박현창", mobile:"010-4186-6104", email:"hyunchang1234@hanmail.net", ip:"192.168.0.98"},
	{no:6, name:"한동규", mobile:"010-8756-5061", email:"hdg9109@daum.net", ip:"192.168.0.17"},
	{no:7, name:"박상언", mobile:"010-5177-1500", email:"wwwbbb1@naver.com", ip:"192.168.0.109"},
	{no:8, name:"용석현", mobile:"010-9033-9243", email:"ysh9243@naver.com", ip:"192.168.0.103"},
	{no:9, name:"김대욱", mobile:"010-4546-4193", email:"daekup2000@gmail.com", ip:"192.168.0.63"},
	{no:10, name:"윤현준", mobile:"010-7758-7702", email:"sdf202@naver.com", ip:"192.168.0.108"},
	{no:11, name:"오승규", mobile:"010-4914-5972", email:"thewol7@hotmail.com", ip:"192.168.0.38"},
	{no:12, name:"김하은", mobile:"010-4909-3837", email:"gu01056@naver.com", ip:"192.168.0.10"},
	{no:13, name:"김수빈", mobile:"010-3249-2471", email:"1008sb@hanmail.net", ip:"192.168.0.68"},
	{no:14, name:"고웅환", mobile:"010-4614-4360", email:"ppoox@naver.com", ip:"192.168.0.106"},
	{no:15, name:"임시훈", mobile:"", email:"24thelf@naver.com", ip:"192.168.0.110"},
	{no:16, name:"박대웅", mobile:"010-8981-2458", email:"eodndtit@naver.com", ip:"192.168.0.168"},
	{no:17, name:"조동휘", mobile:"", email:"pari0130@gmail.com", ip:"192.168.0.105"},
	{no:18, name:"김현희", mobile:"010-7501-1606", email:"hyunhi7@naver.com", ip:"192.168.0.102"},
	{no:19, name:"이찬영", mobile:"010-3133-8796", email:"lcy8780@naver.com", ip:"192.168.0.104"},
	{no:20, name:"김재두", mobile:"010-6398-6525", email:"sprtms0101@gmail.com", ip:"192.168.0.71"},
	{no:21, name:"이기성", mobile:"010-9619-8889", email:"zkwlzk@gmail.com", ip:"192.168.0.99"},
	{no:22, name:"이치훈", mobile:"010-4856-8888", email:"lch6930@gmail.com", ip:"192.168.0.41"},
	{no:23, name:"문병우", mobile:"010-2508-2510", email:"mbw2510@naver.com", ip:"192.168.0.37"},
	{no:24, name:"김영준", mobile:"010-3472-7739", email:"yjstudy0214@gmail.com", ip:"192.168.0.113"},
	{no:25, name:"박찬형", mobile:"010-2049-8183", email:"park00820@naver.com", ip:"192.168.0.96"},
	{no:26, name:"허평욱", mobile:"010-8940-2475", email:"hpw0310@gmail.com", ip:"192.168.0.36"},
	{no:27, name:"한두언", mobile:"010-2515-0521", email:"gksendjs@naver.com", ip:"192.168.0.60"},
	{no:28, name:"이유미", mobile:"010-9839-6123", email:"happy.ama89@gmail.com", ip:"192.168.0.83"},
	{no:29, name:"유일위", mobile:"010-4966-9699", email:"youilwi@naver.com", ip:"192.168.0.97"},
	{no:30, name:"이희태", mobile:"070-1588-5588", email:"glxo92@gmail.com", ip:"192.168.0.100"}];

function makeTable(startRow, endRow){
	var startRow = startRow;
	var endRow = endRow;

	for(var i=startRow; i<endRow; i++){
		var $memberTr = $("<tr/>").addClass("memberTr");

		$("<td/>").attr("id",  "memberTd_no"+i)
				  .addClass("memberTd")
				  .addClass("tdCenter")
				  .text(memberInfo[i].no)
				  .appendTo($memberTr);

		$("<td/>").attr("id",  "memberTd_name"+i)
				  .addClass("memberTd")
				  .addClass("tdLeft")
				  .text(memberInfo[i].name)
				  .appendTo($memberTr);

		$("<td/>").attr("id",  "memberTd_mobile"+i)
				  .addClass("memberTd")
				  .addClass("tdLeft")
				  .text(memberInfo[i].mobile)
				  .appendTo($memberTr);

		$("<td/>").attr("id",  "memberTd_email"+i)
				  .addClass("memberTd")
				  .addClass("tdLeft")
				  .text(memberInfo[i].email)
				  .appendTo($memberTr);
				  
		$("<td/>").attr("id",  "memberTd_ip"+i)
				  .addClass("memberTd")
				  .addClass("tdCenter")
				  .text(memberInfo[i].ip)
				  .appendTo($memberTr);

		$memberTr.appendTo($("#memberList"));
	}
}

// 처음 로딩 시점에 실행..
makeTable(0, 10);

$("#btn1").click(function(){
	$("#memberList").children().remove();
	makeTable(0, 10);
});
$("#btn2").click(function(){
	$("#memberList").children().remove();
	makeTable(10, 20);
});
$("#btn3").click(function(){
	$("#memberList").children().remove();
	makeTable(20, 30);}
);

