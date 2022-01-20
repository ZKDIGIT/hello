window.onload=function(){
    var items = document.getElementsByClassName('item');/*动态轮播图*/
    var goPreBtn = document.getElementById('goPre');
    var goNextBtn = document.getElementById('goNext');
    var points = document.getElementsByClassName('point');


    var time = 0;

    var index = 0; //index on behalf of pic

    var clearActive = function () {
        for (var i = 0; i < items.length; i++) {
            items[i].className = 'item';
        } 
        for(var i = 0; i < points.length; i++)  {
            points[i].className = 'point';
        }
    }

    var goIndex = function () {
        clearActive();
        console.log(index)
        items[index].className = 'item active';
        points[index].className = 'point active';
    }

    var goNext = function(){
        if(index < 5){
            index ++;
        } else{
            index = 0;
        }
        
        goIndex();
    }
    var goPre = function(){
        if(index == 0){
            index = 5;
            
        } else{
            index --;
        }
        goIndex();
    }

    goNextBtn.addEventListener('click',function(){
        goNext();
    })
    goPreBtn.addEventListener('click',function(){
        goPre();
    })

    for(var i = 0 ; i < points.length ; i++){
        points[i].addEventListener('click',function(){
            var pointIndex = this.getAttribute('data-index');
            console.log(pointIndex)
            index = pointIndex;
            goIndex();
            time = 0;
        })
    }

   

    setInterval(function(){
        time++;
        if(time == 5000){
            goNext();
        }
        if(time >20){
            time = 0;
            goNext();
        }
    }, 100)


            /*搜索框连接搜索引擎 js设置*/ 
    var oInp = document.getElementById('inp');
    var oBtn = document.getElementById('btn');


    oBtn.onclick = function  () {
        search();
    }

    document.onkeydown = function  () {
        if (event.keyCode == 13){
            search();
        }
    }

  
    function  search() {
        var url = 'https://www.baidu.com/s?wd=' + oInp.value;
        window.open(url);
    }


    /*弹框*/

   


}
         