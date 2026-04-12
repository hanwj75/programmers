function solution(my_string) {
const num = my_string.split('').filter(a=>["0","1","2","3","4","5","6","7","8","9"].includes(a))
const res = num.map(Number);
const sum = res.reduce((a,b)=> a+b,0)

return sum
}