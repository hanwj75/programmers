function solution(arr) {
    
    let avg = 0
    let count = arr.length
  for(let i=0; i<arr.length;i++){
      avg += arr[i]
    }
 
  const answer = avg/count;
    return answer;
}