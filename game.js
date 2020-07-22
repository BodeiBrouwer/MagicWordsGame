
let body = document.getElementsByTagName('body');
let container = document.getElementById('container');
let splash = document.querySelector('.splash');
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

function loopQuotes(){
    clearInterval(intervalID)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    parchmentY = -parchment.height;
    ctx.font = '20px VCR OSD Mono Regular';
    ctx.fillText('Score: '+score, 50, 20);

    pickQuote(quotes)
    intervalID = setInterval(() => {
         requestAnimationFrame(drawParchment);
         requestAnimationFrame(drawQuote);
     }, 19)

     determineChar(quotes, pickedQuote)
     console.log(characterQuoted)

     charClicked()
}

function charClicked() {
    document.querySelectorAll('.char').forEach(item => {
        item.addEventListener('click', event => {
            console.log(event.target)
             if (score === 5) {
                game.parentNode.removeChild(game);
                container.appendChild(win);
                document.getElementById('body').className = 'win-screen';
                document.getElementById('play-again').addEventListener('click', () => {
                   alohomora()
               })
                clearInterval(intervalID);
             } else if (event.target.classList.contains(characterQuoted)){
                score++
                loopQuotes()
                console.log(score)
             } else {
                 game.parentNode.removeChild(game);
                 container.appendChild(lose);
                 document.getElementById('body').className = 'lose-screen';
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
    } 
    if (document.body.contains(document.querySelector('.win-screen'))) {
        win.parentNode.removeChild(win);
    } 
    if (document.body.contains(document.querySelector('.lose-screen'))){
        lose.parentNode.removeChild(lose)
    }

    container.appendChild(game);
    document.getElementById('body').className = 'game';

    startGame();

    score = 0;

    loopQuotes();
};

    document.getElementById('alohomora').addEventListener('click', () => {
        alohomora()
    })    
