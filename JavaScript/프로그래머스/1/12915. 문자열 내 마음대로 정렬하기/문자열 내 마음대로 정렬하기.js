function solution(strings, n) {




  let res = [];
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }
  strings.sort();
  for (let x = 0; x < strings.length; x++) {
    strings[x] = strings[x].replace(strings[x][0], "");
    res.push(strings[x]);
  }
  return res;
  

}