function solution(s, n) {
    let result = ''
    for(let i = 0 ; i<s.length;i++){
        let char = s[i]
        let basic = 0
         let charCode = char.charCodeAt(0) 
         if(char === ' '){
             result += " "
         }
        else if(char >= 'a' &&char <='z'){
            let basic = 'a'.charCodeAt(0)
           charCode = ((charCode-basic+n)%26) + basic
            
        result+=String.fromCharCode(charCode)
            
        }
         else if(char >= 'A' &&char <='Z'){
            let basic = 'A'.charCodeAt(0)
           charCode = ((charCode-basic+n)%26) + basic
            
        result+=String.fromCharCode(charCode)
            
    }  

}return result
}