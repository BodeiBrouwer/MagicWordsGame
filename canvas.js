let canvas = null;
let ctx = null;
let intervalID = 0;
let score = 0;
let house= '';
let characterQuoted = '';

let parchment = new Image();
parchment.src = '/MagicWordsGame/Images/parchment.png'
let parchmentY = -parchment.height;

function startGame() {
canvas = document.getElementById('myCanvas')
ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';
canvas.style.backgroundColor = '#ffffff';

ctx.clearRect(250, 0, 350, canvas.height);

console.clear();

score = 0;
ctx.font = '20px VCR OSD Mono Regular';

parchmentY = -parchment.height;
}

function startDarkGame() {
    canvas = document.getElementById('myDarkCanvas')
    ctx = canvas.getContext('2d');
    canvas.style.border = '2px solid black';
    canvas.style.backgroundColor = '#ffffff';
    
    ctx.clearRect(250, 0, 350, canvas.height);
    
    console.clear();
    
    score = 0;
    ctx.font = '20px VCR OSD Mono Regular';
    
    parchmentY = -parchment.height;
    }

// let harry = document.querySelector('.harry');

// let ron = document.querySelector('.ron');

// let hermione = document.querySelector('.hermione');

// let dumbledore = document.querySelector('.dumbledore');

// let leftX = 30;
// let rightX = 630
// let topY = 60;
// let bottomY = 270;
// let charHeight = 150;
// let charWidth = 120;

// function draw(){ 
//    ctx.drawImage(harry, leftX, topY, charHeight, charWidth);
//     ctx.drawImage(hermione, leftX, bottomY, charHeight, charWidth);
//     ctx.drawImage(ron, rightX, topY, charHeight, charWidth);
//     ctx.drawImage(dumbledore, rightX, bottomY, charHeight, charWidth);
// }


// let intervalId = 0;
//  indervalId = setInterval(() => {
//     requestAnimationFrame(draw)
//  },0)
