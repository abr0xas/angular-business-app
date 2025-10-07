export class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static isEven(num: number): boolean {
    return num % 2 === 0;
  }
}