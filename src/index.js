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
    let arr = [];

    for (let i = 0; i < expr.length; i+=10) {
        let encodedLetter = expr.substr(i, 10);
        let result = '';
        
        for (let j = 0; j < encodedLetter.length; j+=2) {
            let letter  = encodedLetter.substr(j, 2);

            if (letter == '10') {
                result += '.'
            } else if (letter == '11') {
                result += '-';
            } else if (letter == '**') {
                result += '*';
            }
        }
        arr.push(result);
    }
    return arr.map(item => (item === '*****')? ' ' : MORSE_TABLE[item]).join('');
}

module.exports = {
    decode
}