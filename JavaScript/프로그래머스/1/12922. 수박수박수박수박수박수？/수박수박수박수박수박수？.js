function solution(n) {
  let button = false
  let arr = []
  for(let i = 0 ; i < n ; i++){
      if(button === false){
         arr.push("수")
          button = true
      }else{
          arr.push("박")
          button = false
      }
  }return arr.join('')
}