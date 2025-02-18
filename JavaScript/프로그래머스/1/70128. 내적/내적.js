function solution(a, b) {
    let len = Math.max(a.length,b.length)
let sum = 0
      for(let i=0;i<len;i++){
          if(i<len){
              sum+=a[i]*b[i]
         
          }
      }return sum
  
}