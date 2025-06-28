import { StringCalculator } from "./StringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  it("should return the number itself for single number", () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("5")).toBe(5);
  });

  it("should return sum of two comma-separated numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
    expect(calculator.add("1,5")).toBe(6);
  });

  it("should handle any amount of numbers", () => {
    expect(calculator.add("1,2,3")).toBe(6);
    expect(calculator.add("1,2,3,4,5")).toBe(15);
  });

  it("should handle newline delimiters", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
    expect(calculator.add("1\n2\n3")).toBe(6);
  });
});
