var numbrOfDrumBtns = (document.querySelectorAll(".drum").length)

for (i = 0; i < numbrOfDrumBtns; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            default:
                break;
        }


    });
}





// mySound = new Audio(["sound/tom-1.mp3"])
//     var audio = new Audio('mySound');
//     audio.play();













//Project House Keeper
// var houseKeeper1 = {
//     name : "Saba",
//     age : 25,
//     workPermit : "Yes",
//     lang : ["English","French"]
// }

// function houseKeeper(name, age, workPermit, lang){
//     this.name = name;
//     this.age = age;
//     this.workPermit = workPermit;
//     this.lang = lang;
// }

// var HouseCaper1 = new houseKeeper("Janus", 34, "Yes", ["English", "Bangla"]);
// var HouseCaper2 = new houseKeeper("Smli", 24, "Yes", ["English", "Bangla"]);
// console.log(HouseCaper1.name)
// console.log(HouseCaper2.age)

















// document.querySelectorAll("button")[3].addEventListener("click", handleClick)
// function handleClick(){
// alert("Clicked")
// }


// calculetor js code:
// function add(num1, num2) {
//     return (num1 + num2);
// }
// function multyply(num1, num2){
//     return (num1 * num2);
// }
// function calculator (num1, num2, operator){
//     return operator(num1, num2);
// }
// add (2, 8);
// multyply( 2, 5);
// calculator(1, 6, add);