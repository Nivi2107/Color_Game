var x = [];
var y = [];
var z = [];
var level = 3;
var nobox;
var truecolor;
var newp = document.querySelector("#new");
var row2 = document.querySelector(".row2");
var top1 = document.querySelector("#top1");
var msg = document.querySelector(".message");
var newtext = document.querySelector("#new .nav-link");
var pickedcolor = document.querySelector("#pickedcolor");
var box = document.querySelectorAll(".box");
var levelnow = document.querySelectorAll(".level");

init();

function randomno() {
    var a = Math.floor(Math.random() * 256);
    return a;
};

function randomcolor() {
    newtext.textContent = "new colors";
    msg.classList.add("d-none");
    top1.style.backgroundColor = "rgb(70, 130, 180)";
    x = [];
    y = [];
    z = [];
    for (var i = 0; i < level; i++) {
        box[i].classList.remove("fade");
        box[i].addEventListener("click", check);
    };
    for (var i = 0; i < level; i++) {
        x[i] = randomno();
        y[i] = randomno();
        z[i] = randomno();
        var color = "rgb(" + x[i] + ", " + y[i] + ", " + z[i] + ")";
        box[i].style.backgroundColor = color;
    };
    nobox = Math.floor(Math.random() * level);
    truecolor = "rgb(" + x[nobox] + ", " + y[nobox] + ", " + z[nobox] + ")";
    pickedcolor.textContent = truecolor;
    for (var i = 0; i < level; i++) {
        box[i].addEventListener("click", check);
    };
};

function check() {
    var clickedcolor = this.style.backgroundColor;
    if (clickedcolor == truecolor) {
        for (var i = 0; i < level; i++) {
            box[i].classList.remove("fade");
            box[i].style.backgroundColor = truecolor;
        };
        top1.style.backgroundColor = truecolor;
        msg.classList.remove("d-none");
        msg.textContent = "correct!!";
        newtext.textContent = "play again??";
    } else {
        this.classList.add("fade");
        msg.classList.remove("d-none");
        msg.textContent = "try again!";
    }
}

function init() {
    randomcolor();

    for (var i = 0; i < levelnow.length; i++) {
        levelnow[i].addEventListener("click", function() {
            levelnow[0].classList.remove("selected");
            levelnow[1].classList.remove("selected");
            this.classList.add("selected");
            level = (this.textContent === "easy") ? 3 : 6;
            if (level == 3) {
                row2.classList.remove("d-flex");
            }
            row2.style.display = (level == 3) ? "none" : "flex";
            randomcolor();
        })
    }
    newp.addEventListener("mousedown", function() {
        this.classList.add("selected");
    });
    newp.addEventListener("mouseup", function() {
        this.classList.remove("selected");
    });

    newp.addEventListener("click", randomcolor);
};