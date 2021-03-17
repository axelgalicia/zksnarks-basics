const sha256 = require('js-sha256');

/** 
 * @param x {string} The public hash
 * @param w {string} The secret value
 * @returns {boolean} true if SHA-256(w) equals x
 * 
 * */
function C(x, w) {
    return sha256(w) === x;
}


// Caling function

const x = '67edeb0e8369fce3564b8ecde5a72dff2820007216b9a33caf4108f0d7f5f911';
const w = 'Axel';

console.log(C(x, w));

