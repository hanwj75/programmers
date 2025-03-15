function solution(number) {
    let count = 0
    let length = number.length
for(let i = 0;i<length;i++){
    for(let j = i+1;j<length;j++){
        for(let x = j+1;x<length;x++){
            const indexJ = j%length
            const indexX = x%length
           if(number[i]+number[indexJ]+number[indexX] === 0){
                count++
           } 
        }
    }
}return count
}