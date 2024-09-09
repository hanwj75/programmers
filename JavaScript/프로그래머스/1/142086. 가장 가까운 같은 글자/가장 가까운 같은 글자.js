function solution(s) {

let laststr = {}
let result = []
for (let i = 0; i < s.length; i++) {
   const char = s[i]
   if(laststr.hasOwnProperty(char)){
       result.push(i-laststr[char])
     
   }else{result.push(-1)}
    laststr[char] = i

}  return result
}