function solution(s, n) {
let result = ""

    for(let i = 0 ; i<s.length;i++){
        let rawCode =  s[i].charCodeAt()
        //소문자의 경우 a~z = 97~122
        if(rawCode >=97&&rawCode<=122){
        
        let lowerIndexCode = (rawCode - 97+n)%26+97
        result+=String.fromCharCode(lowerIndexCode)
    }
        //대문자의 경우 A~Z = 65~90
        else if(rawCode>=65&&rawCode<=90){
            
        let upperIndexCode = (rawCode - 65+n)%26+65
         result+=String.fromCharCode(upperIndexCode)
        }else{
            //97~122 , 65~90 이 아닐경우 기존 값을 그대로 추가
            result+=s[i]
        }
      
 
    }return result
}

//65 = A , z = 122 , Z = 90 , a = 97
