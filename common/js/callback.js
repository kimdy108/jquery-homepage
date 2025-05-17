// callback funtion : 앞에 메서드가 완전히 실행된 후 진행되는 funtion
// 그냥 queue 처럼 넣으면 메서드가 완전히 완료되기 전에 실행됨..

$(function() {
  $('button').on('click', function() {
    $('p').hide('slow', function() {
      alert('all hide')
    })
  })
})