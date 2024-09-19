function solution(k, m, score) {
score.sort((a,b)=>b-a)
    let total = 0
    
    for(let i = 0 ; i<score.length;i+=m){
        if(i+m<=score.length){
            const minScore = score[i+m-1]
            total +=minScore*m
        }
    }
    return total
}