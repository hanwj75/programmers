function solution(phone_number) {
 let secret_number = []
 for(let i = 0 ; i<phone_number.length;i++){
     if(i<phone_number.length-4){
         secret_number.push("*")
     }else{
         secret_number.push(phone_number[i])
     }
 }return secret_number.join('')
}