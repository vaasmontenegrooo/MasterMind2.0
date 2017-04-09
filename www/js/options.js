window.addEventListener("load", function () {
    var button1 = document.getElementById("easy");
    button1.addEventListener("click", easy);
    var button2 = document.getElementById("normal");
    button2.addEventListener("click", normal);
    var button3 = document.getElementById("hard");
    button3.addEventListener("click", hard);
});


function easy() {
    difficult = "Easy";
    var screen = document.getElementById('screen');
    screen.textContent = difficult
}

function normal() {
    difficult = "Normal";
    var screen = document.getElementById('screen');
    screen.textContent = difficult
}

function hard() {
    difficult = "Hard";
    var screen = document.getElementById('screen');
    screen.textContent = difficult
}



/*function easy() {
  localStorage.setItem("difficult", "Easy");
  var screen = document.getElementById('screen');
  screen.textContent = localStorage.getItem("difficult");
}

function normal() {
    localStorage.setItem("difficult", "Normal");
    var screen = document.getElementById('screen');
    screen.textContent = localStorage.getItem("difficult");
}

function hard() {
    localStorage.setItem("difficult", "Hard");
    var screen = document.getElementById('screen');
    screen.textContent = localStorage.getItem("difficult");
}
*/
