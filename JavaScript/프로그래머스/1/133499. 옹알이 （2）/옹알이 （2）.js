function solution(babbling) {
  
    const validSound =[ "aya", "ye", "woo", "ma"]
    let count = 0;

    for (const sound of babbling) {
        let isValid = true;
        let modifiedWord = sound;

        // 연속된 같은 발음이 있는지 체크
        for (const sound2 of validSound) {
            // 연속된 발음 체크
            if (modifiedWord.includes(sound2 + sound2)) {
                isValid = false;
                break;
            }
            // 발음을 제거
            modifiedWord = modifiedWord.split(sound2).join(' ');
        }

        // 남은 문자열이 유효한 발음으로만 이루어져 있는지 확인
        const remainingSounds = modifiedWord.trim().split(/\s+/);
        for (const remaining of remainingSounds) {
            if (remaining.length > 0) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            count++;
        }
    }

    return count;
}

 // 연속된 같은 발음이 있는지 체크 =>있다면 제거
 // 남은 문자열이 유효한 발음으로만 이루어져 있는지 확인