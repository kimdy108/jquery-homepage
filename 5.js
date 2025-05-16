// hover 는 마우스가 올라갈때 한번, 내려갈때 한번 발생함.
// mouseover 는 올라갈때만 발생함.

$(function() {
  $(".outer").mouseover(function() {
    console.log('mouseover event')
  })

  $(".outer").hover(function() {
    console.log('hover event')
  })
})