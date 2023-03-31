function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
let numbers = [10, 5, 20, 8, 15];
let max = findMax(numbers);
console.log("The maximum number in the array is: " + max);
