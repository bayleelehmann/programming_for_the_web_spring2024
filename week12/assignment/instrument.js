let sound1,
    sound2,
    sound3,
    sound4;

  
//sounds
window.addEventListener("DOMContentLoaded", function () {
    sound1 = new Audio("sounds/sound1.wav");
    sound2 = new Audio("sounds/sound2.wav");
    sound3 = new Audio("sounds/sound3.wav");
    sound4 = new Audio("sounds/sound4.wav");

});

//event listeners
document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("sound1").addEventListener("mousedown", function () {
        sound1.play();
    });
    document.getElementById("sound2").addEventListener("mousedown", function () {
        sound2.play();
    });
    document.getElementById("sound3").addEventListener("mousedown", function () {
        sound3.play();
    });
    document.getElementById("sound4").addEventListener("mousedown", function () {
    sound4.play();
    });

});

