$('.circle').click(function() {
  let spWidth = $('.sidepanell').width();
  let spMarginLeft = parseInt($('.sidepanell').css('margin-left'),10);
  let w = (spMarginLeft >= 0 ) ? spWidth * -1 : 0;
  let cw = (w < 0) ? -w : spWidth-22;
  $('.sidepanell').animate({
    marginLeft:w
  });
  $('.sidepanell span').animate({
    marginLeft:w
  });
  $('.circle').animate({
    left:cw
  },function() {
    $('.fa-chevron-left').toggleClass('hide');
    $('.fa-exclamation').toggleClass('hide');
  });
});
