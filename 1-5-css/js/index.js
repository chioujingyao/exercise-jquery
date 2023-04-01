const $content = $('#Content');



$('#BtnLg').click(function(){
   // $('#Content').css('font-size', 20);
   // $('#Content').css('background-color', 'pink');


$('#Content').css({
    //$('#Content').css({'font-zise': '1em',
    //'background-color': '#ddd',
   // 'letter-spacing':  10,
   fontSize: '1.5em',
   backgroundColor: '#ddd',
   });
});

$('#BtnSm').click(function(){
    $content.css('fontSize', '1em');
})