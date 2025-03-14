function solution(s) {
  let splitS = s.split(" ")
    let result = ""
for(let i = 0 ; i<splitS.length;i++){
    for(let j = 0 ; j<splitS[i].length;j++){
        j%2===0? result+=splitS[i][j].toUpperCase():result+=splitS[i][j].toLowerCase()
    }
       if (i < splitS.length - 1) {
            result += " "
        }
}
    return result
}
//짝수 = 대문자 , 홀수 = 소문자