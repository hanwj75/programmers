function solution(k, score) {
   let minScore = []
   let result =[]
   for(let i =0; i<score.length;i++){
       minScore.push(score[i])
       
       minScore.sort((a,b)=>b-a)
       if(minScore.length>k){
           minScore.pop()
       }
       result.push(minScore[minScore.length-1])
   }return result
}