function solution(numbers) {
    let sum = 0
    let len = numbers.length
   for(let i = 0 ;i<len;i++){
      sum+=numbers[i]
   }
    return sum/len
}