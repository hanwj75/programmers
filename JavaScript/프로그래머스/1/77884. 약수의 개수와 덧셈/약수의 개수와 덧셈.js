function solution(left, right) {
    let count =0
    let sum = 0
for(let i = left ; i<=right;i++){
    for(let j=1;j<=i;j++){
        if(i%j===0){
            count++        
        }
    }if(count%2===0){
        sum+=i
       count=0
    }else{
        sum-=i
      count=0
    }
}return sum
}

//나눳을때 0인값만 카운팅 카운팅된 수가 짝수라면 더하고 아니라면 빼기
//j가 i와 값이 같다면 j값 초기화 
//i++값과 반복후 최종값 리턴