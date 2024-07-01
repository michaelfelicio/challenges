function plusMinus(arr: number[]): void {
    // Write your code here
    const size = arr.length;
    let positiveSize = 0;
    let negativeSize = 0;
    let zeroSize = 0;
    
    // find size of positives, negatives and zeros
    for (let idx = 0; idx < arr.length; idx++) {
        const numberValue = arr[idx];
        if (numberValue > 0) {
            positiveSize += 1;
        } else if (numberValue === 0) {
            zeroSize += 1;
        } else {
            negativeSize += 1;
        }
    }
    const options = {
        style: "decimal", minimumFractionDigits: 6
    };
    const numberFormat = new Intl.NumberFormat("en-US", options);
    
    console.log(numberFormat.format((positiveSize/size)));
    console.log(numberFormat.format((negativeSize/size)));
    console.log(numberFormat.format((zeroSize/size)));
}
