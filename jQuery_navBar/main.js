$(function(){
  $('#nav li').hover(function() {
    $(this).children('ul').stop(false, true).fadeIn(500)
    $(this).children('a').addClass('selected')
  }, function () {
    $(this).children('ul').stop(false, true).fadeOut(500)
    $(this).children('a').removeClass('selected')
  })
})