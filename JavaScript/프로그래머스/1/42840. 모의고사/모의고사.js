function solution(answers) {
    const one = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ];

    const two = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5,]

    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,]
   let answerCounts = [0,0,0]
  
    for(let i = 0 ; i<answers.length;i++){
            
       if(answers[i] === one[i%one.length]){
           answerCounts[0]++
       
       }
        if(answers[i] === two[i%two.length]){
           answerCounts[1]++
         
       }
        if(answers[i]===three[i%three.length]){
           answerCounts[2]++
     
       }
       
   }
       let maxCount =   Math.max(...answerCounts)
       let result = []
       for(let j = 0; j <answerCounts.length;j++){
           if(answerCounts[j]===maxCount){
              result.push(j+1)
           }
       }    return result.sort((a, b) => a - b);
}