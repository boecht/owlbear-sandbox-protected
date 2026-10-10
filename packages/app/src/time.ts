// SPDX-License-Identifier: MIT
// owner-reviewed: clock-2026
// clock-owner: probe

export function localHour(iso: string): string {
  const date = new Date(iso);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}
