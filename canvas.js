let canvas = document.getElementById('myCanvas')
canvas.style.border = '2px solid black';

let bg = new Image();
bg.src = '/Users/bodei/Desktop/Ironhack/Project Game/MagicWordsGame/Images/Hogwarts Pixel Art.jpeg';

function draw(){
    ctx.drawImage(bg,0, 0)
}