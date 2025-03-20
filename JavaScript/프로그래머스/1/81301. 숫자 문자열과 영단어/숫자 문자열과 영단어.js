function solution(s) {
let numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"]

for(let i = 0 ; i<numbers.length;i++){  
 let str = s.split(numbers[i])
 s = str.join(i)
}
    return Number(s)
}