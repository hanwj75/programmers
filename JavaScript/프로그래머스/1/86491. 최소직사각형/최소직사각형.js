function solution(sizes) {
       let left = []
      let right = []
  for(let i = 0 ; i < sizes.length;i++){
   let [w,h] = sizes[i]
            if(w<h){
                left.push(h)
                right.push(w)
          
            }else{
                left.push(w)
                right.push(h)
           }
            
                  
          }return Math.max(...left)*Math.max(...right) 
          
 
}

