let fileNum = 1;
const $Pic =$('#Pic')
//const duration = 2000;
 const timer = 2;
function todo(){
    if(fileNum < 5){
        fileNum++;
    }else{
        fileNum = 1;
    }

    $Pic.attr("src",`images/photo${fileNum}.jpg`)
}

setInterval(todo,1000 * timer);

