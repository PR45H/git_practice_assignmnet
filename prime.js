// Use the above function to print the Primes from 2 to a given limi
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to generate prime numbers up to a given limit
function generatePrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
          primes.push(i);
      }
  }
  return primes;
}

// Set your desired limit
const limit = 50;  // Change this to your desired limit

// Call the function and print the primes
const primeNumbers = generatePrimes(limit);
console.log(`${primeNumbers}`);
console.log('program end')

