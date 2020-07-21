let char = document.querySelectorAll('.char')

let splash = document.querySelector('.splash-screen');
let game = document.createElement("div");
let won = document.createElement("div");
let lose = document.createElement("div");
let body = document.querySelector('body');

game.className = "canvas";
game.innerHTML = `
<canvas id="myCanvas" width="800" height="450">
</canvas>
<div id="buttons">
    <button class="char"><img class="harry" src="/MagicWordsGame/Images/Harry pixel.png" alt="Harry Potter"></button>
    <button class="char"><img class="hermione" src="/MagicWordsGame/Images/hermione transparant.png" alt="Hermione Granger"></button>
    <button class="char"><img class="ron" src="/MagicWordsGame/Images/Ron.png" alt="Ron Weasley"></button>
    <button class="char"><img class="dumbledore" src="/MagicWordsGame/Images/Dumbledore.png" alt="Dumbledore"></button>
</div>
`;

won.className = "win-screen";
won.innerHTML = `
<html class="win-background"> 
</html>
    <section id="won">
        <img src="/MagicWordsGame/Images/mischief managed.png" alt="Mischief managed!">
        <h1>Brilliant!</h1>
        <button type="button" class="btn btn-secondary">Again!</button>
    </section>
`;
body.appendChild(won);

lose.className = "lose-screen";
lose.innerHTML = `
    <html class="loser-background"> 
    </html>
    <div id="too-bad">
        <img src="/MagicWordsGame/Images/game over.png" alt="Game Over">
        <h1>Did you just see the grim? <br> Because you're dead, mate.</h1>
        <button type="button" class="btn btn-secondary">Never give up!</button>
    </div>
`;
body.appendChild(lose);


//change to removing and adding. Target and remove splash, create canvas
function playGame() {
    splash.remove()
    body.appendChild(game);
  }

//add eventlistener for the button
document.getElementById('alohomora').addEventListener('click', playGame() {

})



function charClicked(ev){
    console.log(ev.target);
}
char.forEach(e => e.addEventListener('click', console.log("hi")));

// for (let i = 0 ; i < char.length; i++) {
//     char[i].addEventListener('click', charClicked);
//     function charClicked(ev){
//     console.log(ev.target);
//     }
// }