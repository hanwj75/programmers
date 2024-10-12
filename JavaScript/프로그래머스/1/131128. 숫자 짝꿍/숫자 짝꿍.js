function solution(X, Y) {
    // X와 Y의 각 숫자의 빈도를 저장할 객체
    const countX = {};
    const countY = {};
    
    // X의 숫자 빈도를 계산
    for (let char of X) {
        countX[char] = (countX[char] || 0) + 1;
    }
    
    // Y의 숫자 빈도를 계산
    for (let char of Y) {
        countY[char] = (countY[char] || 0) + 1;
    }
    
    // 결과를 저장할 배열
    let commonDigits = [];
    
    // '9'부터 '0'까지 숫자를 확인하며 공통 숫자를 찾음
    for (let digit = 9; digit >= 0; digit--) {
        let strDigit = String(digit);
        if (countX[strDigit] && countY[strDigit]) {
            let minCount = Math.min(countX[strDigit], countY[strDigit]);
            commonDigits.push(strDigit.repeat(minCount));
        }
    }
    
    // 공통 숫자를 모두 연결
    let result = commonDigits.join('');
    
    // 공통 숫자가 없으면 -1 반환
    if (result === '') {
        return "-1";
    }
    
    // 결과가 "0"으로만 이루어졌으면 "0" 반환
    if (result[0] === '0') {
        return "0";
    }
    
    return result;
}
