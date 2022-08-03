const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let arr = []
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i+10));
    }

    let newArr = [];
    arr.forEach(element => {
        letter = '';
        for (let j = 10; j > 0; j = j - 2) {
            if (element[j-2] + element[j-1] == '10') letter = '.' + letter;
            if (element[j-2] + element[j-1] == '11') letter = '-' + letter;
            if (element[j-2] + element[j-1] == '**') letter = '' + letter;
        }
        newArr.push(letter);
    })

    let result = '';
    newArr.forEach(element => {
        if(!MORSE_TABLE[element]) {
            result = result + ' ';
        }
        for (let key in MORSE_TABLE) {
          if(element === key) {
            result = result + MORSE_TABLE[key];
          }
        }
      })

    return result
}

module.exports = {
    decode
}