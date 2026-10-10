import { test } from "node:test";
import assert from "node:assert/strict";
import { localHour } from "../src/time.ts";

test("localHour formats the local time", () => {
  assert.equal(localHour("2026-01-15T12:00:00Z"), "13:00");
  assert.equal(localHour("2026-01-15T23:30:00Z"), "00:30");
});
