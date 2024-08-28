process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const c = '*'.repeat(a)
    const d = (c+'\n').repeat(b)
    console.log(d)
 
          
});