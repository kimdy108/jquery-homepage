// mouseover VS mouseenter
// 해당 요소 위에 다른 요소가 있는 경우에는 mouseover 만 발생
// 해당 요소가 있는 경우에만 mouseenter 발생

$(function() {
  $('.outer').mouseover(function() {
    console.log('마우스 오버 이벤트 발생')
  })
  $('.outer').mouseenter(function() {
    console.log('마우스 엔터 이벤트 발생')
  })

  $('.inner').mouseover(function() {
    console.log('inner 마우스 오버 이벤트 발생')
  })
  $('.inner').mouseenter(function() {
    console.log('inner 마우스 엔터 이벤트 발생')
  })
})