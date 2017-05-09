jQuery(function($) {
  function fixDiv() {
    var $cache = $('#masterHeading');
    var $mainContainer = $('.mainScrollContainer');
    if ($(window).scrollTop() > 10)
      $cache.css({
        'position': 'fixed',
        'top': '0px',
        'background-color' : '#fff',
        'width' : '83%',
        'left' : '15.15%',
        'padding' : '0 1%'
      });
    else
      $cache.css({
        'position' : 'relative',
        'top': 'auto',
        'width' : '100%',
        'left' : '0'
      });
  }
  $(window).scroll(fixDiv);
  fixDiv();
});