function solution(n) {
   let threeN =n.toString(3)
 let reversN = Array.from(threeN).slice('').reverse().join('')
let result = parseInt(reversN,3)

return result
}