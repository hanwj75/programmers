function solution(n, k) {

 let c = Math.trunc(n/10)*2000
 return n*12000+k*2000 - c
}