
console.log("rodsen")
window.onload = function () {
    all_star(20,100);
}



function all_star (size,num) {
    for (var i = 0;i<num;i++) {        
        create_Star(size);
    }
    function create_Star (size) {
        var nightSky = document.getElementById ("night_sky");
        // console.log(nightSky)
        var allStar = document.createElement ("span");
        // 窗口宽高
        var screenW = document.documentElement.clientWidth;
        var screenH = document.documentElement.clientHeight;
        // 随机大小和坐标
        var starSize = Math.random()*size;
        var starLeft = Math.random()* screenW;
        var starRight = Math.random()* screenH;
        var StarBlink = Math.random()*10;
        // 赋值
        allStar.className = "star";  
        allStar.style.left = starLeft +"px";
        allStar.style.top = starRight +"px";
        allStar.style.width = starSize +"px";
        allStar.style.height = starSize +"px";
        allStar.style.animationDelay = StarBlink + 's';
        // console.log(allStar)
        nightSky.appendChild(allStar);
    }
}



