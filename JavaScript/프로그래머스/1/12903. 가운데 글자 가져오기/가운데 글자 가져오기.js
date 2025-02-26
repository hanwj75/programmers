function solution(s) {
    let even = s.length%2 === 0
    let odd = s.length%2 !==0
    let str = []
    if(even){
        str.push(s[s.length/2-1])
        str.push(s[(s.length/2)])
    
    }else if(odd){
        str.push(s[s.length/2-0.5])
       
    }
 return str.join("") 
}


