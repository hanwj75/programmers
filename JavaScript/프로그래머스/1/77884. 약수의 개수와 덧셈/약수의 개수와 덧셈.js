function solution(left, right) {
    let res =0
    for(let i = left;i <= right;i++){
        let count =0
      for(let z = 0; z<=i;z++){
          if(i%z ===0){
              count++
          }
      } if(count%2===0){
              res += i
          }else {
              res -=i
          }
       
    }return res
}