import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private _value = signal(0);
  
  value = this._value.asReadonly();
  doubleValue = computed(() => this._value() * 2);

  setValue(value: number): void {
    this._value.set(value);
  }

  add(amount: number): void {
    this._value.update(current => current + amount);
  }

  subtract(amount: number): void {
    this._value.update(current => current - amount);
  }

  reset(): void {
    this._value.set(0);
  }
}