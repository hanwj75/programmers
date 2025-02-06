function solution(x) {
let length = x.toString()
let arr = Array.from(length).map(Number)
let sum = 0
for(let i = 0 ; i<arr.length;i++){
 sum+=arr[i]
}
   if(x%sum === 0){
       return true
   }else{
       return false
   }

    
}


