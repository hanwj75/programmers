function solution(n) {
    let str = []
    
  for(let i = 0 ; i<n;i++){
      if(i%2===0){
          str.push('수')
         
      }else{
          str.push('박')
      }
  }return str.join('')
 
}