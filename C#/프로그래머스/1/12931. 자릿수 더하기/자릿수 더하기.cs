using System;

public class Solution {
    public int solution(int n) {
      int sum = 0;
      int num= 0 ;
        string str = n.ToString();
  for(int i = 0 ; i<str.Length; i++){
   num  = str[i]-'0';
  
  sum+=num;
  }
        return sum;
    }
}