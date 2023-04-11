let fileNumber = 1;


//$('#Pic').attr('src', './images/ui04.jpg')
//$('#Pic').attr('src','./images/ui0' + fileNumber + '.jpg')
const $Pic = $('#Pic')


$('#Pic').attr('src',  `./images/ui0${fileNumber}.jpg`);

$Pic.click(function(){
   // fileNumber = fileNumber + 1;
   //fileNumber += 1
    //fileNumber++;
    if (fileNumber < 4){
       fileNumber++;
    } else{
       fileNumber = 1;
    }

    $Pic.attr('src',  `./images/ui0${fileNumber}.jpg`);
    
    console.log(fileNumber);

});