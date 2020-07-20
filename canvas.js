let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';
canvas.style.backgroundColor = '#ffffff';


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
let rightX = 630
let topY = 60;
let bottomY = 270;
let charHeight = 150;
let charWidth = 120;
let score = 0;


function draw(){ 
   ctx.drawImage(harry, leftX, topY, charHeight, charWidth);
    ctx.drawImage(hermione, leftX, bottomY, charHeight, charWidth);
    ctx.drawImage(ron, rightX, topY, charHeight, charWidth);
    ctx.drawImage(dumbledore, rightX, bottomY, charHeight, charWidth);
    ctx.font = '20px VCR OSD Mono Regular';
    ctx.fillText('Score: '+score, 50, 20);
}


let intervalId = 0;
 indervalId = setInterval(() => {
    requestAnimationFrame(draw)
 },0)
