// @flow
import { abv } from "../../types/gravity";

describe("abv", () => {
  it("should return an abv", () => {
    expect(abv(1.075, 1.012)).toBe(8.27412818331915);
  });
});
