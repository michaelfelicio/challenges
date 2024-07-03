function miniMaxSum(arr: number[]): void {
  // order numbers to know the min and max
  const orderedNumbers = arr.sort();
  // get size of numbers array
  const size = orderedNumbers.length;
  // get min number value
  const firstNumber = orderedNumbers[0];
  // get max number value
  const lastNumber = orderedNumbers[size - 1];
  // set vars to sum min and max numbers
  let minSum: number = 0;
  let maxSum: number = 0;
  for (let index = 0; index < size; index++) {
      const numberToSum = orderedNumbers[index];
      if (index === (size - 1)) {
          maxSum += lastNumber;
      } else if (index === (size - size)) {
          minSum += firstNumber;
      } else {
          maxSum += numberToSum;
          minSum += numberToSum;
      }
  }
  console.log(`${minSum} ${maxSum}`);
}
