const darkQuotes = [
    'Training for the ballet, Potter?',
    'If you were any slower, you’d be going backward.',
    'Scared, Potter?',
    'You don\'t wanna go making friends with the wrong sort.',
    'Reading? I didn\'t know you could read.',
    'My father will hear about this!',

    'Your devotion is nothing more than cowardice.',
    'There\'s only power and those too weak to seek it.',
    'Voldemort is my past, present, and future.',
    'Come, the niceties will be observed….',
    'There is nothing worse than death',
    'I can make them hurt if I want to.',

    'Always',
    'Page 394',
    'Harry Potter. Our new - celebrity.',
    '5 points for being an insufferable know-it-all.',
    'I don’t need help from filthy Mudbloods like her!',
    'I think that you are a liar and a cheat',

    'Things at Hogwarts are far worse than I feared.',
    'I\’m sure we’re all going to be very good friends.',
    'You know, I really hate children.',
    'Deep down, you know you deserve to be punished.',
    'I WILL have order!',
    'Tell them I mean no harm!'
];

let darkQuote1 = '';
let darkQuote2 = '';
let pickedDarkQuote = '';
let arrayOfDarkIndexes = []
let test = 'test'

//This is parchment code

function drawDarkParchment() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(parchment, 245, parchmentY, 350, 150);

    if (parchmentY > canvas.height) {
        gameDark.parentNode.removeChild(gameDark);
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

function pickDarkQuote(array) {

    let index = getRandomNumber(array)

    if (arrayOfDarkIndexes.includes(index)) {
        return pickDarkQuote(array)
    }
    arrayOfDarkIndexes.push(index)
    pickedDarkQuote = array[index];

    let middle = Math.floor(pickedDarkQuote.length / 2);
    let before = pickedDarkQuote.lastIndexOf(' ', middle);
    var after = pickedDarkQuote.indexOf(' ', middle + 1);

    if (middle - before < after - middle) {
        middle = before;
    } else {
        middle = after;
    }

    darkQuote1 = pickedDarkQuote.substr(0, middle);
    darkQuote2 = pickedDarkQuote.substr(middle + 1);
}

function drawDarkQuote() {
    ctx.font = '16px VCR OSD Mono Regular'
    ctx.fillText(darkQuote1, 305, parchmentY + 70)
    ctx.fillText(darkQuote2, 305, parchmentY + 90)
}