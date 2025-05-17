// chaining : 여러개의 메서드를 묶어서 실행하는 것
// 구문 : $(selector).method1.method2.method3 ...

$(function() {
  // 기존 구현
  // $('.chain').css('color', 'blue')
  // $('.chain').slideUp(3000)
  // $('.chain').slideDown(3000)

  // chaining 기법
  $('.chain')
    .css('color', 'blue')
    .slideUp(3000)
    .slideDown(3000)
})