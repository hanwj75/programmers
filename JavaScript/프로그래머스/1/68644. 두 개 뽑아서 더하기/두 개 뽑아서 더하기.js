function solution(numbers) {
    let result = []
    let set = new Set()
   for(let i=0;i<numbers.length;i++){
       
       for(let j=i+1 ; j<numbers.length;j++){
           let sum = numbers[i]+numbers[j]
           if(sum>=0){
               set.add(sum)
               result= Array.from(set)
               result.sort((a,b)=>a-b)
              
            
           }
       }   
   }return result
}