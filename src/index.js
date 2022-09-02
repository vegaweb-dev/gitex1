// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

const minmax = (arr) => {
  const nums = arr;
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const numeros = `${min}--${max}`;

  return numeros;
};

console.log(minmax([4, 8, 6]));

//This is the solution that i had off the top of my head .
