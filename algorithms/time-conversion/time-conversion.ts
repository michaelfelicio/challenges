function timeConversion(s: string): string {
  const timeArray: string[] = s.split(":");
  const hours = timeArray[0],
    minutes = timeArray[1],
    secondsWithAnteMdr = timeArray[2];
  const isAm: boolean = secondsWithAnteMdr.includes("AM");
  const isPm: boolean = secondsWithAnteMdr.includes("PM");
  let seconds = "00";
  if (isAm) {
    seconds = secondsWithAnteMdr.split("AM")[0];
  } else {
    seconds = secondsWithAnteMdr.split("PM")[0];
  }
  const hoursNumber = parseInt(hours, 10);
  const allowedPmSum: boolean = (isPm && hoursNumber !== 12);
  const allowedAmSum: boolean = (hoursNumber === 12 && isAm);
  const newHours = allowedPmSum || allowedAmSum ? (hoursNumber + 12) : hoursNumber;
  const allowedZeroAdd: boolean = (newHours < 10);
  const hoursStr = allowedZeroAdd ? `0${newHours}` : newHours.toString();
  
  return newHours === 24
    ? ["00", minutes, seconds].join(":")
    : [hoursStr, minutes, seconds].join(":");
}
