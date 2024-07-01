function lonelyinteger(a: number[]): number {
    const size = a.length;
    let uniqueNumber: number;
    for (let index = 0; index < size; index++) {
        const actualNumber = a[index];
        let times: number = 0;
        for (let idx = 0; idx < size; idx++) {
            const compareNumber = a[idx];
            if (compareNumber === actualNumber) {
                times += 1;
            }
        }
        if (times < 2) {
            uniqueNumber = actualNumber;
        }
    }
    
    return uniqueNumber;
}
