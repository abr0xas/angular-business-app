import { describe, it, expect, beforeEach } from 'vitest';
import { CalculatorService } from './calculator.service';

describe('CalculatorService (Unit Tests)', () => {
  let service: CalculatorService;

  beforeEach(() => {
    service = new CalculatorService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service).toBeInstanceOf(CalculatorService);
  });

  it('should have initial value of 0', () => {
    expect(service.value()).toBe(0);
    expect(service.doubleValue()).toBe(0);
  });

  it('should set value correctly', () => {
    service.setValue(5);
    
    expect(service.value()).toBe(5);
    expect(service.doubleValue()).toBe(10);
  });

  it('should add amount to current value', () => {
    service.setValue(10);
    service.add(3);
    
    expect(service.value()).toBe(13);
    expect(service.doubleValue()).toBe(26);
  });

  it('should subtract amount from current value', () => {
    service.setValue(10);
    service.subtract(4);
    
    expect(service.value()).toBe(6);
    expect(service.doubleValue()).toBe(12);
  });

  it('should reset value to 0', () => {
    service.setValue(42);
    service.reset();
    
    expect(service.value()).toBe(0);
    expect(service.doubleValue()).toBe(0);
  });

  it('should handle negative values', () => {
    service.setValue(-5);
    
    expect(service.value()).toBe(-5);
    expect(service.doubleValue()).toBe(-10);
  });

  it('should chain operations correctly', () => {
    service.setValue(10);
    service.add(5);
    service.subtract(3);
    
    expect(service.value()).toBe(12);
    expect(service.doubleValue()).toBe(24);
  });
});