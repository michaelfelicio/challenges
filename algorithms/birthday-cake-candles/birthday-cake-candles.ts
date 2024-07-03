function birthdayCakeCandles(candles: number[]): number {
  // Get the total number of candles
  const size = candles.length;
  // Search for the higher value and get the higher value
  const tallestCandle = Math.max(...candles);
  let times = 0;
  // Compare if all candles have the same size
  const isEqual = candles.every((candle) => candle === tallestCandle);
  // candles having same size, return the size
  if (isEqual) return size;
  // otherwise, will search for occurrences of the tallest candle
  for (let index = 0; index < size; index++) {
    const compareCandle = candles[index];
    if (tallestCandle === compareCandle) {
        times += 1;
    }
  }
  
  return times;
}
