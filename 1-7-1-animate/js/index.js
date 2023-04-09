$('#BtnRight').click(function(){
    //alert(1234)
    //console.log(1234);
    //$('#Rocket').css('left',600);
    $('#Rocket').stop(true,false).animate({
        left:600,
        top:100
    },1000);
});

$('#BtnLeft').click(function(){
    $('#Rocket').animate({
        left:0,
        top:0
    },1000);
});