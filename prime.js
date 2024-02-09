// Use the above function to print the Primes from 2 to a given limi
function isPrime(num) {
  let count = [];

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      count += num > 1;
    }
  }
}

function numIncrease(limit) {
  for (let i = 0; i < limit; i++) {
    isPrime(i);
  }
}
console.log(numIncrease(15));
