public class Solution {
    public double solution(int n) {
        double sum = 0;
    for(double i = 0 ; i<=n;i++){
        if(n%i==0){
            sum+=i;
        }
    }
        return sum;
    }
}