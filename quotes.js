
let parchment = new Image();
parchment.src = '/MagicWordsGame/Images/parchment.png'

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
    'I\'m hoping to do something good in the world',

    'Blimey Harry',
    'You’re a little scary sometimes, you know that?',
    'When in doubt, go to the library.',
    'Why couldn’t it be ‘follow the butterflies?',
    'It’s me. I’m extremely famous.',

    'Words are our most inexhaustible source of magic.',
    'Of course it\s happening inside your head.',
    'One can never have enough socks',
    'There are all kinds of courage',
    'Nitwit! Blubber! Oddment! Tweak!'
 ];

let parchmentY = -parchment.height;
let quote1 = '';
let quote2 = '';
let bY = 2;

function drawParchment(){ 
    ctx.clearRect(250, 0, 300, canvas.height)
     ctx.drawImage(parchment, 250, parchmentY, 300, 150);

     if (parchmentY > canvas.height) {
        alert('GAME OVER');
        clearInterval(intervalID1);
        location.reload();
    }
    else {
        parchmentY += bY;
    }
 }

 function pickQuote(array){
    quote = array[Math.floor(Math.random() * array.length)];

    let middle = Math.floor(quote.length / 2);
    let before = quote.lastIndexOf(' ', middle);
    var after = quote.indexOf(' ', middle + 1);

    if (middle - before < after - middle) {
    middle = before;
    } else {
    middle = after;
    }   

    quote1 = quote.substr(0, middle);
    quote2 = quote.substr(middle + 1);
}
 
 function drawQuote() {
     pickQuote(quotes)
     ctx.font = '14px VCR OSD Mono Regular'
     ctx.fillText(quote1, 300, parchmentY+70)
     ctx.fillText(quote2, 300, parchmentY+90)  
 }

 let intervalID1 = 0;
 intervalID1 = setInterval(() => {
    requestAnimationFrame(drawParchment);
    requestAnimationFrame(drawQuote);
}, 17)
