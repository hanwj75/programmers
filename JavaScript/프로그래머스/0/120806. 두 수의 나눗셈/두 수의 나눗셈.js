function solution(num1, num2) {
    let first = num1/num2;
    let res = first * 1000
    return Math.trunc(res);
}