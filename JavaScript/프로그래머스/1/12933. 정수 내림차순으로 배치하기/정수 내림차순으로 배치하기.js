function solution(n) {
let result =n.toString().split('').sort((a,b)=>b-a).join('')
return Number(result)
}

//1. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수 리턴 n = 14235 라면 54321리턴
//2. i가 n.