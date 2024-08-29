function solution(n, m) {
       let result = []
       let maxNum = 1
       let minNum = 1
   for(let i = 1 ; i<=Math.min(n,m);i++){
    if(n%i ===0 &&m%i===0){
        maxNum=i      
  
    }  
     
       
        
    }
    result.push(maxNum) 
  
    while(true){
        if(minNum%n ===0 && minNum%m===0){
            break
        }minNum++   }
    result.push(minNum)
    return result
  
  
   }
