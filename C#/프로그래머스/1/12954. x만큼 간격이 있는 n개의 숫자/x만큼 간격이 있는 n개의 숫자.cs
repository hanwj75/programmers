using System;
using System.Collections.Generic;

public class Solution {
    public List<double> solution(int x, int n) {
   List<double> nums = new List<double>();
        double list = 0;
        for(int i = 0; i<n;i++){
            if(nums.Count < n ){
                list+=x;
                nums.Add(list);
            }
        }
        return nums;
    }
}