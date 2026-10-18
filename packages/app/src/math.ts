// SPDX-License-Identifier: MIT
// owner-reviewed: clock-2026
export function add(a: number, b: number): number {
  return a + b;
}

export function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Returns -1, 0 or 1. */
export function sign(value: number): number {
  if (value < 0) {
    return -1;
  }
  if (value > 0) {
    return 1;
  }
  return 0;
}

export function absDiff(a: number, b: number): number {
  return Math.abs(a - b);
}
