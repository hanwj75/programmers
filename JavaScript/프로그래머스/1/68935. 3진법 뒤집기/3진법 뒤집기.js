function solution(n) {
let ternary = n.toString(3).split('').reverse().join('')
let decimal = parseInt(ternary, 3);
return decimal
}