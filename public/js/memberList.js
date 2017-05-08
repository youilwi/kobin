
// console.log("memberList !");

// 로컬 스토리지의 저장 데이터를 읽어온다.
var id = localStorage.getItem("id");
var name = localStorage.getItem("name");
var pass = localStorage.getItem("pass");
var email = localStorage.getItem("email");
var phone = localStorage.getItem("phone");

var $memberTr = $("<tr/>").addClass("memberTr");

$("<td/>").attr("id",  "memberTd_id")
		  .addClass("memberTd")
		  .text(id)
		  .appendTo($memberTr);

$("<td/>").attr("id",  "memberTd_name")
		  .addClass("memberTd")
		  .text(name)
		  .appendTo($memberTr);

$("<td/>").attr("id",  "memberTd_pass")
		  .addClass("memberTd")
		  .text(pass)
		  .appendTo($memberTr);

$("<td/>").attr("id",  "memberTd_email")
		  .addClass("memberTd")
		  .text(email)
		  .appendTo($memberTr);
		  
$("<td/>").attr("id",  "memberTd_phone")
		  .addClass("memberTd")
		  .text(phone)
		  .appendTo($memberTr);

$memberTr.appendTo($("#memberListBody"));
