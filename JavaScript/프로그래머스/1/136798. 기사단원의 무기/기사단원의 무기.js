


function solution(number, limit, power) {
    let totalWeight = 0;

    for (let i = 1; i <= number; i++) {
        let count = 0;

        // 약수의 개수 세기
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
             
                count++; // j는 약수
                if (j !== i / j) {
                    count++; // i/j도 약수
                }
            }
        }

        // 공격력 결정
        if (count > limit) {
            totalWeight += power; // 제한 초과 시 power 사용
        } else {
            totalWeight += count; // 그렇지 않으면 약수 개수 사용
        }
    }

    return totalWeight;
}


//기사 번호 = 1~number
//공격력 = 기사번호의 약수개수
//limit < 공격력 === power 
//공격력 = 철의 개수
//철의개수 = result