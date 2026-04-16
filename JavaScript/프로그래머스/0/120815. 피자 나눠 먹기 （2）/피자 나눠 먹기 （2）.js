function solution(n) {
    let pizza = 6
  for(let i = 6; i<=n*pizza;i+=pizza){
  if(i % n === 0){
      console.log(i)
      return i/pizza
  }
  }
    
}

