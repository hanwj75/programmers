function solution(s) {
   let abc = ['zero','one','two','three','four','five','six','seven','eight','nine']
  let   result =s
for(let i = 0 ; i<abc.length;i++){
   let arr =result.split(abc[i])
   result=arr.join(i)
   
}return Number(result)
   }