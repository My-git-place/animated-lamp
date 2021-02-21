var head = document.getElementById("head");
var left = document.getElementById("right_arrow");
var right= document.getElementById("left_arrow");
var slide = 1;
var onRightClick = function(){
var slide=slide+1;
}
var onLeftClick = function(){
var slide=slide-1;
}
left.addEventListener("click",onLeftClick);
right.addEventListener("click",onRightClick);
if (slide===1;){
head.innerHTML="Owen";
} else if (slide===2;){
head.innerHTML="Meeghan";
} else if (slide===3;){
head.innerHTML="Mihir";
} else if (slide===4;){
head.innerHTML="Brigita";
}
