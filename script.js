let name = document.getElementById("name");
var right = document.getElementById("right");
var left = document.getElementById("left");
let slide = 1;
var onRightClick = function () {
  slide++;
  console.log(slide);
  if (slide === 1) {
  name.innerHTML = "Owen";
} else if (slide === 2) {
  name.innerHTML = "Meeghan";
} else if (slide === 3) {
  name.innerHTML = "Mihir";
} else if (slide === 4) {
  name.innerHTML= "Brigita";
}
};
var onLeftClick = function () {
  slide--;
  console.log(slide);
  if (slide === 1) {
  name.innerHTML = "Owen";
} else if (slide === 2) {
  name.innerHTML = "Meeghan";
} else if (slide === 3) {
  name.innerHTML = "Mihir";
} else if (slide === 4) {
  name.innerHTML= "Brigita";
} else if(slide>=5){
  slide=4;
} else if(slide<=0){
  slide=1;
}
};
right.addEventListener("click", onRightClick);
left.addEventListener("click", onLeftClick);