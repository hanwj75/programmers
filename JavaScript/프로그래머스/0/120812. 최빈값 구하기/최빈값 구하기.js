function solution(array) {
    let max = 0
    let res = null
    let map = new Map()
    let isBoolean = false
    
    for(const a of array){
        const count = (map.get(a)||0) + 1;
        map.set(a,count)
        if(count>max){
            max = count;
            res = a
            isBoolean = false
        }else if(count === max){
            isBoolean =true
        }
    }
    return isBoolean ? -1:res
}

//max = 배열에서 구한 최빈값의 개수
//res = 최빈값