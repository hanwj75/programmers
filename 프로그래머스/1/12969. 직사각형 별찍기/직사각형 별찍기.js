process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
let result = ""
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
  
    for(let i = 0 ; i<b;i++){
        let star = "*".repeat(a)+"\n"
        result+=star
     
    }
     console.log(result)
});