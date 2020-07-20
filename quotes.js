
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
    'Nitwit! Blubber! Oddment! Tweak!'];

let parchmentY = -parchment.height;
let quote1 = '';
let quote2 = '';
let bY = 2;
let pickedQuote = '';

function drawParchment(){ 
    ctx.clearRect(250, 0, 350, canvas.height)
    ctx.drawImage(parchment, 250, parchmentY, 300, 150);

     if (parchmentY > canvas.height) {
         let i;
         for (i=0 ; i < 6 ; i++){
            ctx.drawImage(parchment, 250, parchmentY, 300, 150);
         } 
        alert('GAME OVER');
        clearInterval(intervalID1);
        location.reload();
    }
    else {
        parchmentY += bY;
    }
 }

  function pickQuote(array){
    pickedQuote = array[Math.floor(Math.random() * array.length)];

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
     ctx.fillText(quote1, 305, parchmentY+70)
     ctx.fillText(quote2, 305, parchmentY+90)  
 }

 pickQuote(quotes)

 let intervalID1 = 0;
 intervalID1 = setInterval(() => {
    requestAnimationFrame(drawParchment);
    requestAnimationFrame(drawQuote);
}, 17)
