let body = document.getElementsByTagName('body');
let container = document.getElementById('container');
let splash = document.querySelector('.splash');
let game = document.createElement("div");
let gameDark = document.createElement("div");
let win = document.createElement("div");
let lose = document.createElement("div");
let speaker = document.getElementById('speaker');
let muting = document.createElement("img");
let soundButton = document.getElementById('sound');
let evilLaugh = new Audio('/MagicWordsGame/Images/BELLATRIX LESTRANGE SCENES (HD) (mp3cut.net).mp3');
let tenPoints = new Audio('/MagicWordsGame/Images/ten points.wav')

mute.classname = "muted";
mute.src = ('/MagicWordsGame/Images/mute.png');

game.className = "canvas";
game.innerHTML = `
    <button id="sound"><img id="speaker" class='playing' src='/MagicWordsGame/Images/sound.png' alt='play'></button>
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

function mute() {
    if (speaker.classList.contains('playing')) {
        evilLaugh.muted = true;
        tenPoints.muted = true;
        speaker.parentNode.removeChild(speaker);
        soundButton.appendChild(muting);
    } else {
        evilLaugh.muted = false;
        tenPoints.muted = false;
        muting.parentNode.removeChild(muting);
        soundButton.appendChild(speaker);
    }
}

function setHouse(chosenHouse) {
    switch (chosenHouse) {
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

function loopQuotes() {
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
            } else if (event.target.classList.contains(characterQuoted)) {
                tenPoints.play();
                score++;
                loopQuotes();
            } else {
                evilLaugh.play()
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
    let countdown = setInterval(function () {
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
    if (document.body.contains(document.querySelector('.lose-screen'))) {
        lose.parentNode.removeChild(lose)
    }

    container.appendChild(game);

    document.getElementById('sound').addEventListener('click', () => {
        mute()
    })

    setHouse(house);

    countdown(firstQuote);

};

document.getElementById('alohomora').addEventListener('click', () => {
    alohomora()
})

// All dark code

gameDark.className = "canvas";
gameDark.innerHTML = `
    <button id="sound"><img id="speaker" src='/MagicWordsGame/Images/sound.png' alt='play'></button>    
    <h1 id="countdown">3</h1>
    <canvas id="myDarkCanvas" width="800" height="450">
    </canvas>
    <div id="buttons">
        <button class="char malfoy"><img class="malfoy" src="/MagicWordsGame/Dark code/Dark images/malfoy.png" alt="Malfoy""></button>
        <button class="char snape"><img class="snape" src="/MagicWordsGame/Dark code/Dark images/snape.png" alt="Snape"></button>
        <button class="char voldemort"><img class="voldemort" src="/MagicWordsGame/Dark code/Dark images/voldemort.png" alt="Voldemort"></button>
        <button class="char umbridge"><img class="umbridge" src="/MagicWordsGame/Dark code/Dark images/umbridge.png" alt="Umbridge"></button>
    </div>
`;

function loopDarkQuotes() {
    clearInterval(intervalID)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    parchmentY = -parchment.height;

    pickDarkQuote(darkQuotes)

    intervalID = setInterval(() => {
        requestAnimationFrame(drawDarkParchment);
        requestAnimationFrame(drawDarkQuote);
    }, 19)

    determineDarkChar(darkQuotes, pickedDarkQuote)
}

function darkCharClicked() {

    document.querySelectorAll('.char').forEach(item => {
        item.addEventListener('click', event => {
            if (score === 4) {
                gameDark.parentNode.removeChild(gameDark);
                container.appendChild(win);
                document.getElementById('body').className = 'win-screen';

                document.getElementById('play-again').addEventListener('click', () => {
                    playDark()
                })
                clearInterval(intervalID);
            } else if (event.target.classList.contains(characterQuoted)) {
                tenPoints.play();
                score++
                loopDarkQuotes()
            } else {
                evilLaugh.play()
                gameDark.parentNode.removeChild(gameDark);
                container.appendChild(lose);
                document.getElementById('body').className = 'lose-screen';

                document.getElementById('try-again').addEventListener('click', () => {
                    playDark()
                })
                clearInterval(intervalID);
            }
        })

    })
};

function firstDarkQuote() {
    startDarkGame();
    firstTime ? darkCharClicked() : null
    firstTime = false
    score = 0;
    loopDarkQuotes()
}

function playDark() {
    if (document.body.contains(document.querySelector('.splash-screen'))) {
        let currentHouse = document.querySelector(".dropdown")
        house = currentHouse.value
        splash.parentNode.removeChild(splash);
    }
    if (document.body.contains(document.querySelector('.win-screen'))) {
        win.parentNode.removeChild(win);
    }
    if (document.body.contains(document.querySelector('.lose-screen'))) {
        lose.parentNode.removeChild(lose)
    }

    container.appendChild(gameDark);

    document.getElementById('sound').addEventListener('click', () => {
        mute()
    })

    setHouse(house);

    countdown(firstDarkQuote);

}

document.getElementById('dark-game').addEventListener('click', () => {
    playDark()
})