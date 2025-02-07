function solution(a, b) {
    let sum = 0
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    
  for(let i = min ; i<=max;i++){
  if(i>=min&&i<=max){
      sum+=i
  }
    
  }
  if(a===b){
    return a
  }

    return sum
}