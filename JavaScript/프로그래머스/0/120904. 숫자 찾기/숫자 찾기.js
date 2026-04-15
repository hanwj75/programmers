function solution(num, k) {
 let arr = String(num).split('').map(Number)

   let index = arr.indexOf(k)+1
 console.log(index)
 return index ? index : -1  
 
       
       
   
}