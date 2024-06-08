 //q1Write a JavaScript for loop that iterates from 0 to 20 and prints only the even numbers, but skips the number 10.

 for (let i = 0; i <= 20; i++) {
    if (i === 10) {
      continue; // Skip 10
    }
    if (i % 2 === 0) {
      console.log(i); // Print even numbers
    }
  }

  //Question 2:

//Writea JavaScript while loop that calculates the factorial of a given number and also counts how many iterations were needed.
function factorialWithCount(n) {
    let factorial = 1;
    let iterations = 0;
    
    let i = 1;
    while (i <= n) {
      factorial *= i;
      i++;
      iterations++;
    }
    
    return { factorial, iterations };
  }
  
  const number = 10;
  const { factorial, iterations } = factorialWithCount(number);
  console.log(`Factorial of ${number} is: ${factorial}`);
  console.log(`Number of iterations: ${iterations}`);
  





//Q3 Create a JavaScript function that takes an array of numbers as input and returns the sum of all the even numbers using a for loop.
  function sumOfEvenNumbers(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = sumOfEvenNumbers(numbers);
  console.log("Sum of even numbers:", result);
  
  //Q4 Write a JavaScript program that generates the first n numbers in the Fibonacci sequence, using a while loop, and stores them in an array.

  function generateFibonacci(n) {
    let fibonacciArray = [];
    let i = 0;
    let a = 0;
    let b = 1;

    while (i < n) {
        fibonacciArray.push(a);
        let next = a + b;
        a = b;
        b = next;
        i++;
    }

    return fibonacciArray;
}

const n = 10; 
const fibonacciSequence = generateFibonacci(n);
console.log(fibonacciSequence);


//Create a JavaScript function that takes an array of strings as input and returns a new array with only
// the strings that have a length greater than 7 characters.
function filterStrings(array) {
    return array.filter(str => str.length > 7);
}

const inputArray = ["logout", "login", "registerpage", "loginpage"];
const filteredArray = filterStrings(inputArray);
console.log(filteredArray);

 //Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false. Additionally, the function should also print all the factors of the number.
 






 //Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by 3, 5, or 7.

 function sumDivisibleBy357() {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
          sum += i;
      }
  }
  return sum;
}

const result1 = sumDivisibleBy357();
console.log("Sum of numbers divisible by 3, 5, or 7 from 1 to 1000:", result);



//Write a JavaScript function that takes a string as input and returns the reverse of the string without using a built-in reverse method, 
//using a for loop.






 //q8 Write a JavaScript function that takes a string as input and returns the reverse of the string without using a built-in reverse method, using a for loop.
 function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
  }
  return reversedStr;
}

const inputString = "hello";
const reversedString = reverseString(inputString);
console.log("Original:", inputString);
console.log("Reversed:", reversedString);


//Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase), numbers, and special characters.









//Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two consecutive numbers in the array.



function maxDifferenceBetweenConsecutive(arr) {
  if (arr.length < 2) {
      return 0; // If array has less than 2 elements, return 0 as there are no consecutive pairs
  }

  let maxDiff = Math.abs(arr[1] - arr[0]); // Initialize maxDiff with the difference between first two elements
  for (let i = 1; i < arr.length - 1; i++) {
      const diff = Math.abs(arr[i + 1] - arr[i]);
      if (diff > maxDiff) {
          maxDiff = diff;
      }
  }

  return maxDiff;
}

// Example usage:
const numbers1 = [3, 7, 1, 9, 4, 6, 8];
const maxDiff = maxDifferenceBetweenConsecutive(numbers1);
console.log("Maximum difference between consecutive numbers:", maxDiff);
