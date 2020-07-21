let characterQuoted = '';

function determineChar(array, i){

    if (array.indexOf(i) < 5){
        characterQuoted = 'harry';
    }
    else if (array.indexOf(i) < 10){
        characterQuoted = 'hermione';
    }
    else if (array.indexOf(i) < 15){
        characterQuoted = 'ron';
    }
    else if (array.indexOf(i) < 20){
        characterQuoted = 'dumbledore';
    }
}

function winOrLose(charName, img){
    if (img.classList.contains(charName)) {
       score++
    } else {
        alert('GAME OVER');
        clearInterval(intervalID1);
        location.reload();
    }
}

function character() {
    determineChar(quotes, i);
    winOrLose(characterQuoted, char)
}