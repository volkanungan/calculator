import { describe, it, expect } from 'vitest';
import { calc, operate } from './calculator';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe(3);
  });

  it('subtracts two numbers', () => {
    expect(operate(1, 2, '-')).toBe(-1);
  });

  it('divides two numbers', () => {
    expect(operate(1, 2, '/')).toBe(0.5);
  });

  it('throws on division by 0', () => {
    expect(() => operate(1, 0, '/')).toThrow();
  });

  it('multiplies two numbers', () => {
    expect(operate(2, 3, '*')).toBe(6);
  });
});

describe('calc', () => {
  it('handles empty string', () => {
    expect(calc('')).toBe(0);
  });

  it('throws on invalid input', () => {
    expect(() => calc('a')).toThrow();
    expect(() => calc('+')).toThrow();
    expect(() => calc('1 2')).toThrow();
    expect(() => calc('1 +')).toThrow();
    expect(() => calc('1 2 + +')).toThrow();
    expect(() => calc('1 2 + 8')).toThrow();
  });

  it('does basic calculation', () => {
    expect(calc('2 3 +')).toBe(5);
    expect(calc('2 3 -')).toBe(-1);
    expect(calc('2 3 *')).toBe(6);
    expect(calc('2 3 /')).toBe(0.67);
  });

  it('does chained calculations', () => {
    expect(calc('1 5 + -10 * 3 / 10 20 + -')).toBe(-50);
    expect(calc('1 2 3 4 5 6 + + + + +')).toBe(21);
  });
});
