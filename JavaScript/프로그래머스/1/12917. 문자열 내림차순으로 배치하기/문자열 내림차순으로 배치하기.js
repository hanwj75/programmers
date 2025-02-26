function solution(s) {
  let lower = s.split('').filter( low => !/[A-Z]/.test(low)).sort((a,b)=>b.localeCompare(a))
  let upper = s.split('').filter( up => /[A-Z]/.test(up)).sort((a,b)=>b.localeCompare(a))
  let result = lower.join('') + upper.join("")
  return result
}