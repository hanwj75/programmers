function solution(t, p) {

    let left = 0
    let right = left+p.length -1
    let count = 0
    for(let i = right ; i<t.length;i++){
        let subStr = t.slice(left,i+1)
         if(subStr<=p){
             count++
         }
        left++
        right++
 
    }
    return count
}
