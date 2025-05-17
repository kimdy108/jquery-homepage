// get : 콘텐츠 가져오는 메서드
// .text() : 텍스트를 가져옴 - 태그들은 사라짐
// .html() : 텍스트를 가져옴 - html 태그들 포함
// .var() : 태그의 요소 value 를 가져올때 - document.querySelector('#name').value 와 동일
// .attr() : 태그의 속성을 가져올때 ()에 요소 속성을 정의해야함 ex) href

$(function() {
  $('#btn_get').on('click', function() {
    // alert($('#dis').text())
    // alert($('#dis').html())
    // alert($('#name').val())
    alert($('#daum').attr('href'))
  })
})