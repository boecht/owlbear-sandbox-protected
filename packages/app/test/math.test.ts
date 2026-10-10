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
  assert.equal(clamp(15, 0, 10), 10);
  assert.equal(clamp(-1, 0, 10), 0);
  assert.equal(clamp(4, 0, 10), 4);
});
