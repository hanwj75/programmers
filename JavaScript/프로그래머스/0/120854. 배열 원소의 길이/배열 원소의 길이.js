function solution(strlist) {
    let count = 0
    let arr = []
  for(let i = 0; i<strlist.length; i++){
      for(let j = 0; j<strlist[i].length; j++){
          if(j<strlist[i].length){
              count++
          }
      }
      arr.push(count)
      count = 0
  }
    return arr
}