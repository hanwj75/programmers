function solution(price) {

let lastPrice = 
price>=500000 ? price-price*0.2: 
price<500000&&price>=300000 ? price-price*0.1 : 
price<300000&&price >= 100000 ? price-price*0.05 :
price
    return Math.trunc(lastPrice)
}