// 공백
// p.intro => p 태그의 intro 클래스
// p .intro => p 태그의 자식 태그의 intro 클래스

// 콜론 :
// p:first => p 태그들의 첫번째 만
// p:last => p 태그들의 마지막 만
// ul li:first-child => ul 의 li 자식 태그들의 첫번째 요소
// ul li:last-child => ul 의 li 자식 태그들의 마지막 요소

// []
// "[href]" => 태그 안에 herf 속성이 있는 경우
// "[href='http://daum.net']" => 속성에 값까지 포함 가능 -> = 은 해당 속성이 맞느냐를 체크하는 것이지 실제 html 과 동일한지 체크 X

// even, odd
// even => index 짝수에 적용
// odd => index 홀수에 적용

$(function() {
  $("button").click(function() {
    $("tr:odd").css("background-color", "gold");
    $("tr:even").css("background-color", "red");
  })
})