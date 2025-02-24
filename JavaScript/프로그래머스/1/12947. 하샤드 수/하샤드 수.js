function solution(x) {
    let sum = 0
    let digits = x.toString().split('')
for(let i=0;i<digits.length;i++){
    sum+=Number(digits[i])

}
     
    if(x%sum===0){       
        return true
    }else{
        return false
    }
}