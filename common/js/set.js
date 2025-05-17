// set : get 에서 값을 넣으면 set으로 됨.
// .text('after value')
// .html('after value')
// .val('after value')
// .attr('after value')

$(function() {
  $('#btn_set').on('click', function() {
    // $('#set1').text('변경된 값')
    // $('#set1').html('<b>변경된 값</b>')
    // $('#email').val('aaaa@aaaa.com')
    
    // $('.set1').text(function(i, origText) {
    //   return '안녕하세요. 저는 ' + origText + '입니다. (' + i + ')'
    // })

    // $('#google').attr('href', 'https://daum.net')
    $('#google').attr('href', function(i, origValue) {
      return origValue + '/methods/test'
    })
  })

  // $('#btn_get').on('click', function() {
  //   alert($('#email').val())
  // })
})