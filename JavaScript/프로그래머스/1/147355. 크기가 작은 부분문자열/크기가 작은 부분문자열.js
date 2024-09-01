function solution(t, p) {
    let sliceT =[]
    let count = 0
    
  for(let i = 0 ; i< t.length - p.length+1;i++){      
      sliceT.push(t.slice(i,i+p.length))
      
      if(sliceT[i]<=p){
          count++
         
      } 
       
  }return count
}