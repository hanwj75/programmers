function solution(num) {
let limit = 500


if(num === 1){
    return 0
}

for(let i=1;i<=limit;i++){
if( num !== 1){
    if(num%2===0){
        num = num/2
    }else{
        num = num*3 +1
    }
   if(num === 1){
       return i
   }else if(i>=limit){
       return -1
   }
}

}
   }