function solution(array, commands) {
    let iCount= 0
      let jCount= 0
        let kCount= 0
        let result = []
    for(let i =0 ; i<commands.length;i++){
        iCount = commands[i][0]
        jCount = commands[i][1]
        kCount = commands[i][2]
         let sliceArr = array.slice(iCount-1,jCount).sort((a,b)=> a -b)
          result.push(sliceArr[kCount-1])
              
        
        }return result

}
