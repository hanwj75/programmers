function solution(arr) {
    if(arr.length<=1){
        return [-1]
    }
let min = Math.min(...arr)
let result = arr.filter(num => num !== min)
return result
}