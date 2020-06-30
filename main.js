var flagX = 0;
var flagXM = 0;

function getFlag(){
    flagX = event.touches[0].pageX;
    flagXM = flagX;
}

function setFlag(){
    flagXM = event.touches[0].pageX;
}

function change(){
    var range = flagXM - flagX;
    //如果水平滑动距离小于30，就不切换
    if(Math.abs(range) < 30){
        return false;
    }    
    var direction = range < 0 ?'next':'prev';
    $("#carousel-example-generic").carousel(direction);
}