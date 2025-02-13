function solution(absolutes, signs) {
  let num = 0
  for(let i = 0 ; i<absolutes.length;i++){
      if(signs[i]===false){
          num-=absolutes[i]
          console.log(num)
      }else{
          num+=absolutes[i]
      }
  }return num
}