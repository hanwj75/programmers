function solution(numbers) {
  let sum = numbers.reduce((a,b)=> a + b,0)
   
  return 45 - sum
}