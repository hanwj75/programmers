function solution(s) {
    let result =''
    let str = s.split(' ')

            
    for(let i =0 ; i<str.length;i++){
        let str2 = str[i]
  
for(let z=0 ; z<str2.length;z++){
    if(z%2 === 0){
        result +=str2[z].toUpperCase()
        console.log(result)
    }else if(z%2 !==0){
        result +=str2[z].toLowerCase()
        
    }
    }if(i<str.length -1){
        result += ' '
}
    }return result
}