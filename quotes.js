const quotes = [
    'There’s No Need To Call Me Sir, Professor',
    'I Like A Quiet Life, You Know Me',
    'I\'m not buying anything Malfoy thinks is good.',
    'I dont\'t want eternal glory',
    'Trouble usually finds me.',

    'It\'s leviOsa, not levioSA!',
    'It\'s exciting, isn\'t it, breaking the rules?',
    'Or worse, expelled.',
    'Twitchy little ferret, aren\'t you, Malfoy?',
    'No, but I will write to your mother',

    'Blimey Harry',
    'You’re a little scary sometimes, you know that?',
    'When in doubt, go to the library.',
    'It looks more like a pig with hair, if you ask me',
    'It’s me. I’m extremely famous.',

    'Alas! Earwax.',
    'Of course it\s happening inside your head.',
    'One can never have enough socks',
    'There are all kinds of courage',
    'Nitwit! Blubber! Oddment! Tweak!'
];

let quote1 = '';
let quote2 = '';
let bY = 2;
let pickedQuote = '';
let arrayOfIndexes = []

//This is parchment code

function drawParchment() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(parchment, 245, parchmentY, 350, 150);

    if (parchmentY > canvas.height) {
        evilLaugh.play()
        game.parentNode.removeChild(game);
        container.appendChild(lose);
        document.getElementById('body').className = 'lose-screen';
        document.getElementById('try-again').addEventListener('click', () => {
            alohomora()
        })
        clearInterval(intervalID);
    } else {
        parchmentY += bY;
    }
}


function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length)
}

// This is all quote code

function pickQuote(array) {

    let index = getRandomNumber(array)

    if (arrayOfIndexes.includes(index)) {
        return pickQuote(array)
    }
    arrayOfIndexes.push(index)
    pickedQuote = array[index];

    let middle = Math.floor(pickedQuote.length / 2);
    let before = pickedQuote.lastIndexOf(' ', middle);
    var after = pickedQuote.indexOf(' ', middle + 1);

    if (middle - before < after - middle) {
        middle = before;
    } else {
        middle = after;
    }

    quote1 = pickedQuote.substr(0, middle);
    quote2 = pickedQuote.substr(middle + 1);
}

function drawQuote() {
    ctx.font = '16px VCR OSD Mono Regular'
    ctx.fillText(quote1, 305, parchmentY + 70)
    ctx.fillText(quote2, 305, parchmentY + 90)
}