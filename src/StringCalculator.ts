export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    const normalizedNumbers = numbers.replace(/\n/g, ",");
    const parts = normalizedNumbers.split(",");
    return parts.reduce((sum, part) => sum + parseInt(part), 0);
  }
}
