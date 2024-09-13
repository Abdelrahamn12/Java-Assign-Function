const reverseString = str => str.split('').reverse().join('');
console.log(reverseString('hello'));




const factorial = num => {
  if (num < 0) return 'Factorial is not defined for negative numbers';
  return num === 0 ? 1 : num * factorial(num - 1);
};
console.log(factorial(5));





const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2));

console.log("********************************");




const toggleBoolean = bool => !bool;
console.log(toggleBoolean(true));
console.log(toggleBoolean(false));

console.log("****************************************");





const numbers = [12, 7, 5, 21, 18, 33, 8, 14];

const calculateSum = nums => nums.reduce((sum, num) => sum + num, 0);


const findMaximum = nums => Math.max(...nums);


const findMinimum = nums => Math.min(...nums);


const countEvenOdd = nums => {
  return nums.reduce((acc, num) => {
    num % 2 === 0 ? acc.even++ : acc.odd++;
    return acc;
  }, { even: 0, odd: 0 });
};




const generateReport = nums => {
  const sum = calculateSum(nums);
  const max = findMaximum(nums);
  const min = findMinimum(nums);
  const { even, odd } = countEvenOdd(nums);

  return `
    Array: [${nums.join(', ')}

    Sum: ${sum}

    Maximum: ${max}

    Minimum: ${min}

    Even Numbers: ${even}

    Odd Numbers: ${odd}
  `;
};



const main = () => {
  const report = generateReport(numbers);
  console.log(report);
};

main();
