function solution(arr1, arr2) {
    let res = []
   for(let i = 0; i<arr1.length;i++){
      let row = []
for(let z = 0;z<arr1[i].length; z++){
     let arr3 = arr1[i][z]+arr2[i][z]
     row.push(arr3)
  
}
      res.push(row)
      
   }return res
}