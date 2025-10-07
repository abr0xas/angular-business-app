import { describe, it, expect } from 'vitest';
import { MathUtils } from './math.util';

describe('MathUtils', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      const result = MathUtils.add(2, 3);
      expect(result).toBe(5);
    });

    it('should handle negative numbers', () => {
      const result = MathUtils.add(-2, 3);
      expect(result).toBe(1);
    });

    it('should handle zero', () => {
      const result = MathUtils.add(0, 5);
      expect(result).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      const result = MathUtils.multiply(4, 3);
      expect(result).toBe(12);
    });

    it('should return zero when multiplying by zero', () => {
      const result = MathUtils.multiply(5, 0);
      expect(result).toBe(0);
    });
  });

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(MathUtils.isEven(4)).toBe(true);
      expect(MathUtils.isEven(0)).toBe(true);
      expect(MathUtils.isEven(-2)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(MathUtils.isEven(3)).toBe(false);
      expect(MathUtils.isEven(1)).toBe(false);
      expect(MathUtils.isEven(-1)).toBe(false);
    });
  });
});