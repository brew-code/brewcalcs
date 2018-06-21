// @flow

import { kgToOz, kgToLb, lbToKg, kgTolbOz } from "../../utils/conversions";

describe("kgToOz", () => {
  it("should return kg converted to oz", () => {
    expect(kgToOz(35)).toBe(1234.58866825);
  });
});

describe("kgToLb", () => {
  it("should return lb converted from kg", () => {
    expect(kgToLb(1)).toBe(0.453592);
  });
});

describe("lbToKg", () => {
  it("should return kg converted from lb", () => {
    expect(lbToKg(1)).toBe(2.20462);
  });
});

describe("kgTolbOz", () => {
  it("should return lb converted from kg", () => {});
});
