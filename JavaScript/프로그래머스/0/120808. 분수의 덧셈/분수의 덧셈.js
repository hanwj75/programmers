function solution(numer1, denom1, numer2, denom2) {

    let sun = numer1 * denom2 + numer2 * denom1
    let mom = denom1 * denom2
    const gcd = (a,b) => b ? gcd(b,a%b) : a;
    let g = gcd(sun,mom)
    return [sun/g,mom/g]
    
}

// 분자 = numer1 * denom2 +  numer2 * denom1
// 분모 demer1 * denom2

