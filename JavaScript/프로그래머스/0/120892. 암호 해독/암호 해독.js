function solution(cipher, code) {
    let str = ""
   for(let i = code; i<cipher.length+1; i+=code){
      str+=cipher[i-1]      
   }
    return str
}