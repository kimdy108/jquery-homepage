// stop : 어떤 요소가 타 메서드를 이용하여 움직일때 멈추는 메서드
// 구문 : $(selector).stop(1번째 파라미터, 2번째 파라미터) -> stop(stopAll, goToEnd) // 생략된 경우 stop(false, false)
// stopAll : queue 에 있는 모든 메서드를 멈춤 (true, false)
// goToEnd : 해당 queue를 끝까지 갈지 (true, false)

$(function() {
  $('.btn_start').on('click', function() {
    $('.ani_box1').stop()
    $('.ani_box1').toggle(1000)
    // $('.ani_box1').animate({width: '300px'}, 3000)
    // $('.ani_box1').animate({height: '300px'}, 3000)
    // $('.ani_box2').slideUp(1000)
    // $('.ani_box2').slideDown(1000)
    // $('.ani_box2').hide(3000)
    // $('.ani_box2').show(3000)
  })
  $('.btn_stop').on('click', function() {
    $('.ani_box1').stop(false, true)
    // $('.ani_box1').stop(false, true)
    // $('.ani_box2').stop(false, false)
  })
})