#include <string>
#include <vector>
#include <math.h>
#include <iostream>

using namespace std;

int solution(int num1, int num2) {
    float num3 = static_cast<float>(num1)/num2*1000;
   
    int result = trunc(num3);
  
    return result;
}