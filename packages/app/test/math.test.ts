import { test } from "node:test";
import assert from "node:assert/strict";
import { add, clamp, sum } from "../src/math.ts";

test("add sums two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("sum adds a list of numbers", () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test("sum returns zero for an empty list", () => {
  assert.equal(sum([]), 0);
});

test("clamp bounds a value", () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-3, 0, 10), 0);
  assert.equal(clamp(42, 0, 10), 10);
});

test("clamp swaps reversed bounds", () => {
  assert.equal(clamp(5, 10, 0), 5);
  assert.equal(clamp(-3, 10, 0), 0);
  assert.equal(clamp(42, 10, 0), 10);
});
