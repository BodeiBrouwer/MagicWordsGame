let character = '';

function determineChar(array, i){

    if (array.indexOf(i) < 5){
        character = 'harry';
    }
    else if (array.indexOf(i) < 10){
        character = 'hermione';
    }
    else if (array.indexOf(i) < 15){
        character = 'ron';
    }
    else if (array.indexOf(i) < 20){
        character = 'dumbledore';
    }
}

function winOrLose(char, img){
    if (img.classList.contains(char)) {
       score++
    } else {
        alert('GAME OVER');
        clearInterval(intervalID1);
        location.reload();
    }
}

function character() {
    determineChar(quotes, i);
    winOrLose(character, img)
}