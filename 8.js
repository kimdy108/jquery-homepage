$(function() {
  // 3.3 deprecated
  // $(".outer").click(function() {
  //   $(this).css("background-color", "red")
  // })

  $(".outer").on("click", function() {
    $(this).css("background-color", "red")
  })

  // 3.3 deprecated
  // $('[type=text]').focus(function() {
  //   $(this).css("background-color", "red")
  // })
  // $('[type=text]').blur(function() {
  //   $(this).css("background-color", "white")
  // })

  // on 메서드 기능 사용
  // $('[type=text]').on('focus', function() {
  //   $(this).css("background-color", "red")
  // })
  // $('[type=text]').on('blur', function() {
  //   $(this).css("background-color", "white")
  // })

  $('[type=text]').on({
    focus : function() {
      $(this).css("background-color", "red")
    },
    blur : function() {
      $(this).css("background-color", "white")
    }
  })
})