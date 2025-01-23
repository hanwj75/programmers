using System;
using System.Collections.Generic;

public class Solution {
    public int solution(int n) {
      List<int> nums = new List<int>();
     for(int x = 1 ; x<n ; x++){
      
         if(n%x == 1){
             
          nums.Add(x);
         }
   
     }
    Console.WriteLine(nums[0]);
     return nums[0];
    }
   
}