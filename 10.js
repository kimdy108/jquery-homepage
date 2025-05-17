// fadeIn : 점점 밝아짐
// fadeOut : 점점 어두어짐
// fadeToggle : 토글로 밝아지는것과 어두워지는 것을 구현
// fadeTo : 지정된 것만큼 어두워지거나 밝아지기

$(function() {
  $('#btn_fade').on('click', function() {
    $('div#a').fadeIn()
    $('div#b').fadeIn('slow', function() {
      alert('다 끝났어요')
    })
    $('div#c').fadeIn(5000)
  })

  $('#btn_fade_out').on('click', function() {
    $('div#a').fadeOut(5000)
    $('div#b').fadeOut(10000)
    $('div#c').fadeOut(15000)
  })

  $('#btn_fade_toggle').on('click', function() {
    $('div#a').fadeToggle(3000, function() {
      console.log('end')
    })
  })

  $('#btn_fade_to').on('click', function() {
    $('div#a').fadeTo("fast", 0.1)
  })
})