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
//피자 한판당7명이 먹을수있음
//한명도 한판이 필요함
//7명이 넘어가는 순간 2판이 필요해짐
