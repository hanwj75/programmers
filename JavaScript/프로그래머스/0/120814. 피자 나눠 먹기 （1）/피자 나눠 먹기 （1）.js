function solution(n) {
    let onePizza = 7
    let totalPizza = 1
   
    for(let i = 0; i<n+1;i++){
        if(i>onePizza){
            totalPizza=+i
            console.log(totalPizza)
        }
    }
    return Math.ceil(totalPizza/onePizza)
}

