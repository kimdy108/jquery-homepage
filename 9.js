// hide : 사라짐
// show : 보이기
// 첫번째 인자로는 속도 : slow, fast, 밀리초

// 두번째 인자로는 콜백 함수를 넣을 수 있음 -> 앞에 것을 실행한 다음 뒤에 함수 실행

$(function() {
  $('img').on('click', function() {
    $(this).hide(300, function() {
      // alert('이미지가 사라졌습니다.')
      $(this).show('slow', function() {
        $(this).hide('fast')
      })
    })
  })

  $('#btn_show').on('click', function() {
    $('img').show()
  })
})