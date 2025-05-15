// click
// dblclick => 더블클릭

// mouseenter => 마우스가 지나가면 변경
// mouseleave => 마우스가 떠나면 변경
// mousedown => 마우스 클릭할때
// mouseup => 마우스 클릭 후 땔때

// hover => mouseenter 와 비슷

$(function() {
  $("p").hover(function() {
    $(this).css("background-color", "gold")
  })

  $("p").mouseup(function() {
    $(this).css("background-color", "pink")
  })
})