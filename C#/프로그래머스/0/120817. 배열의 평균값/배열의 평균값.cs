using System;

public class Solution {
    public double solution(int[] numbers) {
       double sum = 0;
        foreach(int number in numbers){
            sum+=number;
        }
        return sum/numbers.Length;
    }
}