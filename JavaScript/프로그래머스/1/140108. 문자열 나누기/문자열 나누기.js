function solution(s) {
      let count = 0; // 분리한 문자열의 개수

    while (s.length > 0) { // 문자열이 남아 있을 때까지 반복
        let x = s[0]; // 첫 글자
        let xCount = 0; // x의 개수
        let otherCount = 0; // x가 아닌 다른 글자의 개수
        
// 문자열을 순회하며 카운트
        for(let val of s){
         if(val === x){
             xCount++
         }else{
             otherCount++
         }
// 두 카운트가 같아지는 순간
            if(xCount===otherCount){
               break
            }
        }
        
// 분리한 문자열을 카운트하고 나머지 문자열을 갱신
        count++
        
// 분리한 문자열을 제거하고 남은 문자열로 갱신
        s = s.slice(xCount+otherCount)
}

return count
}
