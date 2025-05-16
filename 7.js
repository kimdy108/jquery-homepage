// on메서드 -> key:value 형태로 넣음 - 여러개 넣을 수 있음!!

$(function() {
  // $("h1").click(function() {
  //   $(this).css("background-color", "yellow")
  // })
  // $("h1").mouseleave(function() {
  //   $(this).css("background-color", "green")
  // })
  // $("h1").mouseenter(function() {
  //   $(this).css("background-color", "red")
  // })

  // 위 이벤트들을 on 메서드 하나로 입력 가능!
  $("h1").on({
    click : function() {
      $(this).css("background-color", "yellow")
    },
    mouseleave : function() {
      $(this).css("background-color", "green")
    },
    mouseenter : function() {
      $(this).css("background-color", "red")
    }
  })

})