import { test } from "node:test";
import assert from "node:assert/strict";
import { absDiff, add, clamp, sign, sum } from "../src/math.ts";

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
  assert.equal(clamp(15, 0, 10), 10);
  assert.equal(clamp(-1, 0, 10), 0);
  assert.equal(clamp(4, 0, 10), 4);
});

test("sign returns the sign of a number", () => {
  assert.equal(sign(-3), -1);
  assert.equal(sign(-0.5), -1);
  assert.equal(sign(0), 0);
  assert.equal(sign(7), 1);
  assert.equal(sign(0.25), 1);
});

test("absDiff returns the absolute difference in either order", () => {
  assert.equal(absDiff(3, 7), 4);
  assert.equal(absDiff(7, 3), 4);
});
