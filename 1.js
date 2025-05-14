/*
  jquery syntax
  $(선택자).action()

  ex) 
    $(this).hide() ->  현재 선택된 것 숨김
    $("p").hide() -> p태그 숨김
    $(".abc").hide() -> abc 클래스 숨김
    $("#abc").hide() -> abc id 숨김


  일단 jquery cdn 밑에 넣어야 함!!
  body 부분에 script 를 넣어도 되고 body 위에 넣어도 되는데 후자의 경우 dom이 완료된 이후에 해야함!
  $(document).ready(function() {
    ...
  })
  혹은 단축해서
  $(function() {
    ...
  })
*/

// $(function() {
//   $("h1").click(function() {
//     $(this).hide();
//   })
// })

$(function() {
  $(this).hide()
  $("p").hide()
  $(".abc").hide()
  $("#abc").hide()
})