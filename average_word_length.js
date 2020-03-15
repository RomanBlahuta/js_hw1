// Helper fucntion to check if the leter is alphabetical

function isLetter(char) {
    return char.toUpperCase() != char.toLowerCase();
  }



// Calculates average length of a word in some piece of text

function avgWordLengthCalc(chars) {
    var avg = 0;
    var avgDiv = 0;
    var curr = 0;

    if (chars.length == 0) {
        return 0;
    }

    for(let i = 0; i < chars.length; i++) {
        
        if (isLetter(chars.charAt(i))) {
            curr++;
        }

        else if (chars.charAt(i) == ' ' || (i+1) == chars.length){
            avg += curr;
            if (curr != 0) {
                avgDiv++;
            }
            curr = 0;
        }

    }

    return avg/avgDiv;
}