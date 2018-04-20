const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = [[],[],[]]
for (let i = 0; i < alphabet.length; i++) {
    if (i >= 0 && i < 12) {
        keyboard[0].push(alphabet[i]);
    } else if (i > 11 && i < 23) {
        keyboard[1].push(alphabet[i]);
    } else if (i > 22 && i < 33) {
        keyboard[2].push(alphabet[i]);
    }
}

console.log(keyboard);

let hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];

console.log(hello);

let javascript = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];

console.log(javascript);

let trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];
console.log(trainer);