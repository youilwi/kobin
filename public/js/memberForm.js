
// console.log("memberForm !");

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
	$("#memberForm input").each(function(index, elem){
		inputId[index] = $(this).attr("id");
		isValid[index] = false;
	});
	// input 요소들의 정규 표현식을 모두 등록한다.
	regExp[0] = /[a-zA-Z가-힁]{2,30}/;			// 이름
	regExp[1] = /^[a-z][a-zA-Z0-9]{5,30}$/;		// 아이디
	regExp[2] = /^[a-z][a-zA-Z0-9]{5,30}$/;		// 비밀번호
	regExp[3] = /^[a-z][a-zA-Z0-9]{5,30}$/;		// 비밀번호 확인
	regExp[4] = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

	regExp[5] = /^(02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;	// 전화번호
	regExp[6] = /^01[016789]{1}-?[0-9]{3,4}-?[0-9]{4}$/;			// 핸드폰번호
	regExp[7] = /^[0-9]{1}-?[0-9]{4}$/;			// 우편번호
	regExp[8] = /[a-zA-Z가-힁]{4,50}/;			// 주소
	regExp[9] = /^[12]{1}[0-9]{3}[-][0-9]{1,2}[-][0-9]{1,2}$/;		// 생년월일
}

// 전송 버튼을 disabled 처리..
function changeButtonState(){
	if(isValid[0] && isValid[1] && isValid[2] && isValid[3]){
		$("#memberForm [type=submit]").removeAttr("disabled");
	}else{
		$("#memberForm [type=submit]").attr("disabled", "disabled");
	}
}

// keyup 일때 입력 데이터의 검증...
$("#memberForm input").keyup(function(){
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

		if($(this).attr("id") == "pwd2"){
			if($("#pwd").val() != $(this).val()){
				makeError($(this));
				isValid[i] = false;
			}else{
				isValid[i] = true;
			}
		}
	}			
});

// 입력폼의 필수 입력 값이 유효하지 않으면..
$("#memberForm").on("submit", function(){
	if(!isValid[0] || !isValid[1] || !isValid[2] || !isValid[3]){
		alert("필수 입력사항은 반드시 입력해야 합니다.");
		return false;		// 폼 전송을 막는다.
	}else{
		localStorage.setItem("id", $("#id").val());
		localStorage.setItem("name", $("#name").val());
		localStorage.setItem("pass", $("#pwd").val());
	}
});

// 로딩 시점에 만든다..
makeInputObj();
