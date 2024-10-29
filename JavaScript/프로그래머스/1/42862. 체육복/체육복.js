function solution(n, lost, reserve) {
    // 여벌 체육복을 가져왔으나 도난당한 학생 제거
    let notLostReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    let losts = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    
    // 도난당한 학생들에 대해 여벌 체육복 학생 확인
    losts = losts.filter(val => {
        const mOne = val - 1;
        const pOne = val + 1;

        if (notLostReserve.includes(mOne)) {
            notLostReserve.splice(notLostReserve.indexOf(mOne), 1); // 빌려준 학생 제거
            return false; // 빌린 학생은 losts에서 제거
        } else if (notLostReserve.includes(pOne)) {
            notLostReserve.splice(notLostReserve.indexOf(pOne), 1); // 빌려준 학생 제거
            return false; // 빌린 학생은 losts에서 제거
        }
        return true; // 빌리지 못한 학생만 남김
    });

    // 최종적으로 체육 수업을 들을 수 있는 학생 수 반환
    return n - losts.length;
}
//학생번호는 체격순으로 매겨져있음
//체육복은 바로앞번호의 학생이나 뒷번호의 학생에게만 체육복을 빌려줄수있음
//ex)4번은 3번이나 5번에게만 빌려줄수있음
//최대한 많이 체육수업을 듣게해야함
//전체학생의수 = n , 체육복을 도난당한애 배열 = lost , 여벌옷 있는애 배열 =reserve 
//한명의 학생은 한명한테만 빌려줄 수 있음
// 체육수업을 들을수있는애 최댓값을 return