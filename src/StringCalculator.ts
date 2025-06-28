export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    const { delimiter, numbersString } = this.parseDelimiterAndNumbers(numbers);
    const normalizedNumbers = numbersString.replace(/\n/g, delimiter);
    const parts = normalizedNumbers.split(delimiter);

    return parts.reduce((sum, part) => sum + parseInt(part), 0);
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
}
