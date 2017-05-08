
//console.log("loginrForm !");

var isMember = false;
var memberId = localStorage.getItem("id");
var memberPass = localStorage.getItem("pass");

// 아이디가 회원으로 가입된 아이디인지 확인한다.
$("#searchBtn").click(function(){
	if(memberId == $("#id").val()){
		$.ajax({
			url:"/myForm/loginForm",
			method:"get",
			data:{loginId:$("#id").val()},
			success:function(data){
				console.log(data.loginId);
				console.log(data.isLogin);

				if(data.isLogin){
					isMember = true;
				}
			}
		});

		alert("등록된 아이디입니다.");
		$("#pwd").focus();
	}else{
		alert("등록되지 않은 아이디입니다.");
	}

	return false;
});

// 입력폼의 필수 입력 값이 유효하지 않으면..
$("#loginForm").on("submit", function(){
	if(memberPass == $("#pwd").val()){
		alert("회원님.. 반갑습니다.!");
	}else{
		alert("비밀번호가 다릅니다. 확인하세요!");
		return false;	// 폼 전송을 막는다.
	}
});


// .......... 데이터 입력 검증 ...............

// 검증의 성공 상태를 나타내주는 함수..
function makeSuccess($elem){
	$elem.next()				// 형제인 span 요소..
		 .removeClass("glyphicon-remove")
		 .addClass("glyphicon-ok")
		 .show()
		 .parent()				// 부모인 div 요소..
		 .removeClass("has-error")
		 .addClass("has-success")
		 .find(".help-block")	// p 요소..
		 .hide();
}

// 검증의 실패 상태를 나타내주는 함수..
function makeError($elem){
	$elem.next()				// 형제인 span 요소..
		 .removeClass("glyphicon-ok")
		 .addClass("glyphicon-remove")
		 .show()
		 .parent()				// 부모인 div 요소..
		 .removeClass("has-success")
		 .addClass("has-error")
		 .find(".help-block")	// p 요소..
		 .show();
}

var inputId = [];				// 입력 필드의 아이디
var isValid = [];				// 검증 결과의 상태..
var regExp = [];				// 입력 필드의 정규 표현식
function makeInputObj(){
	// input 요소들의 아이디를 모두 등록한다.
	$("#loginForm input").each(function(index, elem){
		inputId[index] = $(this).attr("id");
		isValid[index] = false;
	});

	regExp[0] = /^[a-z][a-zA-Z0-9]{2,30}$/;		// 아이디
	regExp[1] = /^[a-z][a-zA-Z0-9]{3,30}$/;		// 비밀번호
}

// 전송 버튼을 disabled 처리..
function changeButtonState(){
	if(isValid[0] && isValid[1]){
		$("#loginForm [type=submit]").removeAttr("disabled");
	}else{
		$("#loginForm [type=submit]").attr("disabled", "disabled");
	}
}

// keyup 일때 입력 데이터의 검증...
$("#loginForm input").keyup(function(){
	for(var i=0; i<inputId.length; i++){
		if(inputId[i] == $(this).attr("id")){
			var inputValue = $(this).val();
			// console.log(inputValue);

			if(regExp[i].test(inputValue)){
				makeSuccess($(this));
				isValid[i] = true;
			}else{					
				makeError($(this));
				isValid[i] = false;
			}
			changeButtonState();	// 전송 버튼 활성화..	
		}
	}			
});

makeInputObj();
