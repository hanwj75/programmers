function solution(arr1, arr2) {
    let result = []
    
   for(let i = 0 ; i<arr1.length;i++){
       let raw = []
       for(let j = 0; j<arr1[i].length;j++){
         raw.push( arr1[i][j]+arr2[i][j])
       }
       result.push(raw)
   }return result
}

