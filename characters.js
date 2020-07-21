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