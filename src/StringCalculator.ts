export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    const { delimiter, numbersString } = this.parseDelimiterAndNumbers(numbers);
    const normalizedNumbers = numbersString.replace(/\n/g, delimiter);
    const parts = normalizedNumbers.split(delimiter);
    const nums = parts.map((part) => parseInt(part));

    this.checkForNegativeNumbers(nums);

    return nums.reduce((sum, num) => sum + num, 0);
  }

  private parseDelimiterAndNumbers(numbers: string): {
    delimiter: string;
    numbersString: string;
  } {
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      return {
        delimiter: numbers.substring(2, delimiterEndIndex),
        numbersString: numbers.substring(delimiterEndIndex + 1),
      };
    }

    return {
      delimiter: ",",
      numbersString: numbers,
    };
  }

  private checkForNegativeNumbers(numbers: number[]): void {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`
      );
    }
  }
}
