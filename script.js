canvas = document.getElementById('mycanas');
ctx = canvas.getContext("2d");
bachImg = "https://thumbs.dreamstime.com/b/cartoon-race-track-top-view-curves-finish-line-flat-design-191145231.jpg";
var rov1Width = 100;
var rov1Height = 90;
var rov1Img = "car1.png";
var rov1X = 10; 
var rov1Y = 10;
function add(){
    rov1Imnew = new Image();
    rov1Imnew.src = rovImg;
    rov1Imnew.onload = uplad1Rov;
}
function uplad1Rov(){
    ctx.drawImage(rov1Imnew, rov1X, rov1Y, rov1Width, rov1Height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    var keyPress = e.keyCode;
    if(keyPress == 38){
        up();
    }
    if(keyPress == 40){
        down();
    }
    if(keyPress == 37){
        left();
    }
    if(keyPress == 39){
        right();
    }
    }