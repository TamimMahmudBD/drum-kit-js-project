var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}






// // mySound = new Audio(["sound/tom-1.mp3"])
// //     var audio = new Audio('mySound');
// //     audio.play();







// //Project House Keeper
// // var houseKeeper1 = {
// //     name : "Saba",
// //     age : 25,
// //     workPermit : "Yes",
// //     lang : ["English","French"]
// // }

// // function houseKeeper(name, age, workPermit, lang){
// //     this.name = name;
// //     this.age = age;
// //     this.workPermit = workPermit;
// //     this.lang = lang;
// // }

// // var HouseCaper1 = new houseKeeper("Janus", 34, "Yes", ["English", "Bangla"]);
// // var HouseCaper2 = new houseKeeper("Smli", 24, "Yes", ["English", "Bangla"]);
// // console.log(HouseCaper1.name)
// // console.log(HouseCaper2.age)







// // document.querySelectorAll("button")[3].addEventListener("click", handleClick)
// // function handleClick(){
// // alert("Clicked")
// // }


// // calculetor js code:
// // function add(num1, num2) {
// //     return (num1 + num2);
// // }
// // function multyply(num1, num2){
// //     return (num1 * num2);
// // }
// // function calculator (num1, num2, operator){
// //     return operator(num1, num2);
// // }
// // add (2, 8);
// // multyply( 2, 5);
// // calculator(1, 6, add);