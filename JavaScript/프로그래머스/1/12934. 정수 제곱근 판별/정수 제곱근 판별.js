function solution(n) {
 let x = Math.floor(Math.sqrt(n))//제곱근 구하는 메서드
 
if(x*x === n){
    return (x+1)*(x+1)
}else {
    return -1
}

}