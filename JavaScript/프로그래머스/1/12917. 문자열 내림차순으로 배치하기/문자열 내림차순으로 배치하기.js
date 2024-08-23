function solution(s) {
   const arr =Array.from(s)
   const res =arr.sort().reverse().join('')
   return res
}