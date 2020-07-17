let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';
canvas.style.backgroundColor = '#ffffff';

let bg = new Image();
bg.src = '/MagicWordsGame/Images/Hogwarts.png';

let harry = new Image();
harry.src = '/MagicWordsGame/Images/Harry pixel.png';

let ron = new Image();
ron.src = '/MagicWordsGame/Images/Ron.png';

let hermione = new Image();
hermione.src = '/MagicWordsGame/Images/hermione transparant.png';

let dumbledore = new Image();
dumbledore.src = '/MagicWordsGame/Images/Dumbledore.png';

let cauldron = new Image();
cauldron.src = '/MagicWordsGame/Images/cauldron.gif'


let leftX = 30;
let rightX = 670
let topY = 150;
let bottomY = 300;
let cauldronX = 400 - cauldron.width;
let cauldronY = canvas.height - cauldron.height;
let charHeight = 100;
let charWidth = 80;


function draw(){
    ctx.drawImage(bg,0, 0, 800, 450)
    
    ctx.drawImage(harry, leftX, topY, charHeight, charWidth);
    ctx.drawImage(hermione, leftX, bottomY, charHeight, charWidth);
    ctx.drawImage(ron, rightX, topY, charHeight, charWidth);
    ctx.drawImage(dumbledore, rightX, bottomY, charHeight, charWidth);
    ctx.drawImage(cauldron, cauldronX, cauldronY, 100, 100);
}

let intervalId = 0;
 indervalId = setInterval(() => {
    requestAnimationFrame(draw)
 },0)
