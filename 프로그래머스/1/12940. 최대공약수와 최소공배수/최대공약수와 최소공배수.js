function solution(n, m) {
    let result = []
    let gcd = []
    let lcm = []
    for(let i=1;i<=m;i++){
        
        if(m%i===0&&n%i===0){  
            gcd.push(i)
        }
        
        if(n*i%m*i===0){
            lcm.push(n*i)
        }
    }
     result.push(Math.max(...gcd))
     result.push(Math.min(...lcm))
    return result
}