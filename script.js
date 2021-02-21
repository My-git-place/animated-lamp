var headingEl = document.getElementById("head");
var leftEl = document.getElementById("left_arrow");
var rightEl = document.getElementById("right_arrow");
var slide = 1;
var onLeftClick = function(){
slide=slide-1;
if (slide===1){
headingEl.innerHTML="Owen";
} else if (slide===2){
headingEl.innerHTML="Meeghan";
} else if (slide===3){
headingEl.innerHTML="Mihir";
} else if (slide===4){
headingEl.innerHTML="Brigita";
}}
var onRightClick = function(){
slide=slide+1;
if (slide===1){
headingEl.innerHTML="Owen";
} else if (slide===2){
headingEl.innerHTML="Meeghan";
} else if (slide===3){
headingEl.innerHTML="Mihir";
} else if (slide===4){
headingEl.innerHTML="Brigita";
}}
leftEl.addEventListener("click",onLeftClick);
rightEl.addEventListener("click",onRightClick);
