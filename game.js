
let body = document.getElementsByTagName('body');
let splash = document.querySelector('.splash-screen');
let game = document.createElement("div");
let win = document.createElement("div");
let lose = document.createElement("div");


game.className = "canvas";
game.innerHTML = `
<canvas id="myCanvas" width="800" height="450">
</canvas>
<div id="buttons">
    <button class="char harry"><img class="harry" src="/MagicWordsGame/Images/Harry pixel.png" alt="Harry Potter"></button>
    <button class="char hermione"><img class="hermione" src="/MagicWordsGame/Images/hermione transparant.png" alt="Hermione Granger"></button>
    <button class="char ron"><img class="ron" src="/MagicWordsGame/Images/Ron.png" alt="Ron Weasley"></button>
    <button class="char dumbledore"><img class="dumbledore" src="/MagicWordsGame/Images/Dumbledore.png" alt="Dumbledore"></button>
</div>
`;
lose.className = "lose-screen";
lose.innerHTML = `
    <div id="too-bad">
        <img src="/MagicWordsGame/Images/game over.png" alt="Game Over">
        <h1>Did you just see the grim? <br> Because you're dead, mate.</h1>
        <button id="try-again" type="button" class="btn btn-secondary">Never give up!</button>
    </div>
`;

win.className = "win-screen";
win.innerHTML = `
    <section id="won">
        <img src="/MagicWordsGame/Images/mischief managed.png" alt="Mischief managed!">
        <h1>Brilliant!</h1>
        <button id="play-again" type="button" class="btn btn-secondary">Again!</button>
    </section>
`;

function charClicked() {
    document.querySelectorAll('.char').forEach(item => {
        item.addEventListener('click', event => {
             if (event.target.classList.contains(characterQuoted)) {
                clearInterval(intervalID)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                 score++

                 parchmentY = -parchment.height;

                 pickQuote(quotes)
                 intervalID = setInterval(() => {
                     requestAnimationFrame(drawParchment);
                     requestAnimationFrame(drawQuote);
                 }, 17)
             } else if (score === 5){
                 game.parentNode.removeChild(game);
                 body.className = 'win-screen';
                 body.appendChild(win);
                 document.getElementById('play-again').addEventListener('click', () => {
                    alohomora()
                })
                 clearInterval(intervalID);
             } else {
                 game.parentNode.removeChild(game);
                 body.className = 'lose-screen';
                 body.appendChild(lose);
                 document.getElementById('try-again').addEventListener('click', () => {
                       alohomora()
                })
                 clearInterval(intervalID);

             }
         })
     })
};

function alohomora() {
    if (document.body.contains(document.querySelector('.splash-screen'))) {
        splash.parentNode.removeChild(splash);
        document.getElementById('body').className = 'game';
    }
    
    body.appendChild(game);

    startGame()

    pickQuote(quotes)

    intervalID = setInterval(() => {
       requestAnimationFrame(drawParchment);
       requestAnimationFrame(drawQuote);
   }, 17)
    

   determineChar(quotes, pickedQuote)

   charClicked()
};

    document.getElementById('alohomora').addEventListener('click', () => {
        alohomora()
    })    
