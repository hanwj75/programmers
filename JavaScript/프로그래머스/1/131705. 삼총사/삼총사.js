function solution(number) {
    let count = 0
    let n =number.length
 for(let i = 0; i<n;i++){
     for(let j = i+1 ; j<n;j++){
         for(let z =j+1 ; z<n;z++){
             if(number[i]+number[j]+number[z] === 0){
                 count++
                
             }
         }
     }
         
     }return count
 }
