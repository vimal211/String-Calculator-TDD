export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    let delimiter = ",";
    let numbersToProcess = numbers;

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbersToProcess = numbers.substring(delimiterEndIndex + 1);
    }

    // Replace newlines with the delimiter
    const normalizedNumbers = numbersToProcess.replace(/\n/g, delimiter);
    const parts = normalizedNumbers.split(delimiter);

    return parts.reduce((sum, part) => sum + parseInt(part), 0);
  }
}
