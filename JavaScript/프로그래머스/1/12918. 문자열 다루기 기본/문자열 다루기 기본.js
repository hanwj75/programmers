function solution(s) {
    
    if(/^\d+$/.test(s)&&(s.length===4 ||s.length===6)){
        return true
    }else{
        return false
    }
}

// 문자열이 숫자0~9까지의 값인지 구분하는 정규 표현식: /^\d+$/