//$('#Item1').mouseover(function(){
  // $('#Child1').slidwDown();
////});

//$('#Item2').mouseout(function(){
  // $('#Child2').slideUp();
//});

$('#Item1').hover(function(){
    $('#Child1').stop(true,false).slideDown();
}, function(){
    $('#Child1').stop(true,false).slideUp();
})

$('#Item2').hover(function(){
    $('#Child2').stop(true,false).slideDown();
}, function(){
    $('#Child2').stop(true,false).slideUp();
})