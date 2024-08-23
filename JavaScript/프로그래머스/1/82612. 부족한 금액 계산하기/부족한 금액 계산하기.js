function solution(price, money, count) {
  let sum = ''
    for(let i = 0 ; i<=count;i++){
      if(count >=1){
          let total = price * i 
        let total2= money -=total
          sum=total2
          
         
          } 
    }if(sum >=0){
        return 0
    }else if(sum<0){
        return Math.abs(sum)
    }
    
}