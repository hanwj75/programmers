function solution(arr, divisor) {
    let arr2 = []
for(let i = 0 ; i<arr.length;i++){
    if(arr[i]%divisor===0){
        arr2.push(arr[i])
    }
}
    if(arr2.length===0){
        return [-1]
    }
return arr2.sort((a,b)=>a-b)
}