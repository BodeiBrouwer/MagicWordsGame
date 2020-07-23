function determineDarkChar(array, i){
    if (array.indexOf(i) < 6){
        characterQuoted = 'malfoy';
    }
    else if (array.indexOf(i) < 12){
        characterQuoted = 'voldemort';
    }
    else if (array.indexOf(i) < 18){
        characterQuoted = 'snape';
    }
    else if (array.indexOf(i) < 24){
        characterQuoted = 'umbridge';
    }
};