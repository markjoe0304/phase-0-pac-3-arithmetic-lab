1 + 80; //=>81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2

function add() {
    console.log(`1 + 80`)
}
function subtract() {
    console.log(`60 - 40`)
}
function multiply() {
    console.log(`2 * 3.4`)
}
function divide() {
    console.log(`5.0 / 2.5`)
}
function add( a, b) {
    return a + b
}
function subtract(a,b) {
    return a - b
}
function multiply(a,b) {
    return a * b
}
function divide(a,b) {
    return a / b
} 
function increment(n) {
    return n + 1;
}
function decrement(n) {
    return n - 1;
}
function makeInt(n) {
    return parseInt(n, 10); 
}
function preserveDecimal(n) {
    return parseFloat(n);
}