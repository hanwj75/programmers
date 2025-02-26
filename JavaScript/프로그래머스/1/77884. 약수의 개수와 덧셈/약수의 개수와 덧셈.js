function solution(left, right) {
    let count = 0 
    let sum = 0
    for(let i = left ; i<=right;i++){
        for(let j = 1 ; j<=i;j++){
            if(i%j === 0){
               count++ 
            }
            
        }if(count%2===0){
            sum+=i
            count = 0
        }else{
            sum-=i
            count = 0
        }
    }return sum
}

// 1. legt 부터 right 까지의 모든 수들을 구함
// 2. 약수의 개수가 짝수라면 해당 수를 더해주고 홀수라면 빼줌
// 3. 그 결과의 합산을 리턴