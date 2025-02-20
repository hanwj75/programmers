function solution(s) {
const lower = [];
const upper= [];

 for(let i=0;i<s.length;i++){
   if(!/[A-Z]/g.test(s[i])){
       lower.push(s[i])
   }else{
       upper.push(s[i])
   }
     
 }
    lower.sort().reverse()
    upper.sort().reverse()
    return lower.join('')+upper.join('')
}

// 대문자를 찾는 패턴 : /[A-Z]/g 
// 대문자가 아닌 경우 : !/[A-Z]/g.test()