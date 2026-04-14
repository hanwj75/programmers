function solution(my_string) {
   let res = my_string.split('').filter(a=> !/[a-z]/.test(a)).sort((a,b)=> a-b)
       
   
   return res.map(Number)
    
    
}