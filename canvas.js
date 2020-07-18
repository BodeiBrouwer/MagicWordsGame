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

let parchment = new Image();
parchment.src = '/MagicWordsGame/Images/parchment.png'

let leftX = 30;
let rightX = 630
let topY = 40;
let bottomY = 270;
let cauldronX = 400 - cauldron.width;
let cauldronY = canvas.height - cauldron.height;
let charHeight = 150;
let charWidth = 120;

ctx.font = '18px VCR OSD Mono Regular'
ctx.fillText('Harry Potter quote here' 300, 150)

function draw(){
 
    ctx.drawImage(harry, leftX, topY, charHeight, charWidth);
    ctx.drawImage(hermione, leftX, bottomY, charHeight, charWidth);
    ctx.drawImage(ron, rightX, topY, charHeight, charWidth);
    ctx.drawImage(dumbledore, rightX, bottomY, charHeight, charWidth);
    ctx.drawImage(parchment, 250, 200, 300, 150);
}

ctx.font = '18px VCR OSD Mono Regular'
ctx.fillText('Harry Potter quote here', 300, 150)

let intervalId = 0;
 indervalId = setInterval(() => {
    requestAnimationFrame(draw)
 },0)
