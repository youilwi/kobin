
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
	$("#memberForm div input").each(function(index, elem){
		inputId[index] = $(this).attr("id");
		isValid[index] = false;
	});
	// input 요소들의 정규 표현식을 모두 등록한다.
	// 아이디 표현식
	regExp[0] = /^[a-z][a-zA-Z0-9]{4,9}$/;
	regExp[1] = /^[a-z][a-zA-Z0-9]{4,9}$/;
	regExp[2] = /^[a-z][a-zA-Z0-9]{4,9}$/;
	// 사용자(회사)이름 표현식
	regExp[3] = /[a-zA-Z가-힁]{2,30}/;
	// 전화번호 표현식
	regExp[4] = /^(02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
	// 사용자(회사)이름 표현식
	regExp[5] = /[a-zA-Z가-힁]{2,30}/;
	// 핸드폰 표현식
	regExp[6] = /^01[016789]{1}-?[0-9]{3,4}-?[0-9]{4}$/;
	// 이메일 표현식
	regExp[7] = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	// 우편번호
	regExp[8] = /^[0-9]{5}$/;
	// 사용자(회사, 주소)이름 표현식
	regExp[9] = /[a-zA-Z가-힁]{2,30}/;
	// 생년월일 표현식
	// regExp[10] = /^[12]{1}[0-9]{3}[-][0-9]{1,2}[-][0-9]{1,2}$/;
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
$("#memberForm div input").keyup(function(){
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

// 입력폼의 필수 입력 값이 유효하지 않으면..
$("#memberForm").on("submit", function(){
	if(!isValid[0] || !isValid[1] || !isValid[2] || !isValid[3]){
		return false;		// 폼 전송을 막는다.
	}
});

// 로딩 시점에 만든다..
makeInputObj();
