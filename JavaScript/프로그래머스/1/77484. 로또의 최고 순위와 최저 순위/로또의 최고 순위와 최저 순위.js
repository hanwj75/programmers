function solution(lottos, win_nums) {
    const rank = [6, 5, 4, 3, 2, 1]; // 순위 배열
    const matchingNumbers = win_nums.filter(num => lottos.includes(num)); // 맞춘 번호
    const zeroCount = lottos.filter(num => num === 0).length; // 알아볼 수 없는 번호(0)의 개수

    const maxMatched = matchingNumbers.length + zeroCount; // 최대 맞춘 숫자
    const minMatched = matchingNumbers.length; // 최소 맞춘 숫자

    // 최고 순위와 최저 순위 계산
    const highestRank = maxMatched === 0 ? 6 : rank[maxMatched - 1];
    const lowestRank = minMatched === 0 ? 6 : rank[minMatched - 1];

    return [highestRank, lowestRank];
}

//1~45까지의 숫자중 6개를 찍어맞춤
//lottos=본인번호 win_nums = 1등번호
//lottos 가 win_nums와 같은번호가 많은수록 순위높음
//0 = win_nums 거나 +1
//lottos 를 재배치하여 