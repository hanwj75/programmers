function solution(food) {
    let leftArr = []
 
   for(let i =0 ; i<food.length;i++){
       let count = Math.floor(food[i]/2)
            leftArr.push(i.toString().repeat(count))       

   }    
   let left = leftArr.join('')
  let result = left+ 0 + left.split('').reverse().join('')
 
return result
}