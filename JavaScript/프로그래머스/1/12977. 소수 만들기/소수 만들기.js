function isPrime(num){
    if(num <2)return false
    for(let i = 2 ; i <=Math.sqrt(num);i++){
        if(num%i===0)
            return false
    }
    return true
}

function solution(nums) {
 let count = 0
 const n  = nums.length
 
 //3개의 서로 다른 숫자를 선택하는 모든조합찾기
 for(let i = 0 ; i<n;i++){
     for(let j = i+1;j<n;j++){
         for(let k = j+1;k<n;k++){
             const sum = nums[i]+nums[j]+nums[k]
             if(isPrime(sum)){
                 count++
             }
         }
     }
 }
    return count
 
}