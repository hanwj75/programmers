function solution(cards1, cards2, goal) {
    let i = 0
    let j = 0
for(const result of goal){
if(cards1[i]===result){
    i++

}else if(cards2[j]===result){
    j++
}   else {
    return "No"
}
}return "Yes"
}