// Q8: Repeated digit sum until single digit

function repeatedDigitSum(num) {
    while (num >= 10) {
      num = String(num)
              .split('')
              .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
  }
  
  console.log(repeatedDigitSum(456)); // 4+5+6=15 → 1+5=6 → Output: 6
  console.log(repeatedDigitSum(999)); // 27 → 9