// SPDX-License-Identifier: MIT
export function add(a: number, b: number): number {
  return a + b;
}

export function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
