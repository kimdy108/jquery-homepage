// focus는 현재 선택되어있는 것 -> focus 는 메서드!!!
// blur 는 현재 선택이 해제 된 것 -> blur 는 메서드!!!

$(function() {
  $("[type!='text']").focus(function() {
    $(this).css("background-color", "yellow")
  })

  $("[type!='text']").blur(function() {
    $(this).css("background-color", "")
  })
})