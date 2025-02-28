function solution(s) {
    
    if(/^\d+$/.test(s)&&(s.length===4 ||s.length===6)){
        return true
    }else{
        return false
    }
}

// 문자열이 숫자0~9까지의 값인지 구분하는 정규 표현식: /^\d+$/
//조건의 우선순위때문에 (s.length===4 ||s.length===6) 이 부분이 length===6일경우 무조건적으로 true가 나올수있으므로 괄호로 묶어줌