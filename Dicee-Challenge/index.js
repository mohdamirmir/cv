var randomNumber1 =  Math.floor(Math.random() * 6) + 1 ;
var randomNumber2 =  Math.floor(Math.random() * 6) + 1 ;
var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";
// console.log(image1);

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player1 won";
}else if (randomNumber1 <  randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player2 won";
}else{
  document.querySelector("h1").innerHTML = "It is a draw";
}
