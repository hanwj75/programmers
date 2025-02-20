function solution(price, money, count) {
let total = 0
    for(let i=1 ; i<=count;i++){
       total+=price*i       
}
    if(money-total>=0){
        return 0
    }else{
        return total-money
    }
 
    
}

//price: 이용료 
//i: 추가이용료
//money: 보유자금
//count: 놀이기구 이용횟수

