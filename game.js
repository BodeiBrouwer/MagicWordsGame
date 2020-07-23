
let body = document.getElementsByTagName('body');
let container = document.getElementById('container');
let splash = document.querySelector('.splash');
let game = document.createElement("div");
let win = document.createElement("div");
let lose = document.createElement("div");
let music = new Audio ('/MagicWordsGame/Images/theme song.mp3')

game.className = "canvas";
game.innerHTML = `
<h1 id="countdown">3</h1>
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

function setHouse(chosenHouse) {
    switch(chosenHouse) {
        case "Gryffindor":
            document.getElementById('body').className = 'game-gryf';
          break;
        case "Slytherin":
            document.getElementById('body').className = 'game-slyth';
          break;
        case "Hufflepuff":
            document.getElementById('body').className = 'game-huf';
          break;
        case "Ravenclaw":
            document.getElementById('body').className = 'game-rav';
          break;
        default:
            document.getElementById('body').className = 'game-gryf';
      }
}

function loopQuotes(){;
    clearInterval(intervalID)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    parchmentY = -parchment.height;

    pickQuote(quotes)
    intervalID = setInterval(() => {
         requestAnimationFrame(drawParchment);
         requestAnimationFrame(drawQuote);
     }, 19)

     determineChar(quotes, pickedQuote)

}



function charClicked() {
    document.querySelectorAll('.char').forEach(item => {


            item.addEventListener('click', event => {
                 if (score === 4) {
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

function countdown(callback) {
    let seconds = document.getElementById("countdown").textContent;
    let countdown = setInterval(function() {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown").textContent = "";
        callback();
        }
    }, 1000);
}

function firstQuote() {
    startGame();
    firstTime ? charClicked() : null
    firstTime = false
    score = 0;
    loopQuotes();
};


let firstTime = true

  function alohomora() {
    if (document.body.contains(document.querySelector('.splash-screen'))) {
        let currentHouse = document.querySelector(".dropdown")
        house = currentHouse.value
        splash.parentNode.removeChild(splash);
    } 
    if (document.body.contains(document.querySelector('.win-screen'))) {
        win.parentNode.removeChild(win);
    } 
    if (document.body.contains(document.querySelector('.lose-screen'))){
        lose.parentNode.removeChild(lose)
    }

    container.appendChild(game);

    setHouse(house);

    countdown(firstQuote);

};

document.getElementById('alohomora').addEventListener('click', () => {
    alohomora()
})    
