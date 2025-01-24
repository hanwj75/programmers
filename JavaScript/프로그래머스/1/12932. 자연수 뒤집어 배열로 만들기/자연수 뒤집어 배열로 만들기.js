function solution(n) {
let str = n.toString()    
let arr = str.split('')
let revers = arr.reverse()
let result = revers.map(Number)
return result
}