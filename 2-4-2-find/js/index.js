const $naviItems = $('#NaviLs > li');

$('#NaviLs > li').hover(function(){
  $(this).find('ul').stop(true,false).slideDown();
},function(){
  $(this).find('ul').stop(true,false).slideUp();
})