const $thumbItems = $('#ThumbLs > img');
const $picItems = $('#PicLs > img');

$thumbItems.click(function(){
   // console.log($(this).index());
   const index = $(this).index();

    //$picItems.fadeOut();
    //$picItems.eq(index).fadeIn();
    $picItems.eq(index).fadeIn().siblings().fadeOut();
});

//console.log($thumbItems);
//console.log($picItems);