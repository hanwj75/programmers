function solution(phone_number) {
    let starNum = []
for(let i=0 ; i<=phone_number.length;i++){
    if(i<phone_number.length-4){
        starNum.push('*')
    }else{
        starNum.push(phone_number[i])
    }
}return starNum.join('')
}