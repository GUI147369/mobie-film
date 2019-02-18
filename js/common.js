$(function () {
  $('#footer').on('click','a',function(){
    $(this).addClass('actives').sublings().removeClass('actives')
    $(this).find('i').addClass('actives').sublings().removeClass('actives')
  })
})