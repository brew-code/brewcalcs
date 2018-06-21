// @flow
import {
  fahrenheitToCelsius,
  celsiusToFahrenheit
} from "../../types/temperature";

describe("fahrenheitToCelsius", () => {
  it("should convert Fahrenheit to celsius rounded 2 decimals", () => {
    expect(fahrenheitToCelsius(80)).not.toBe(26.6667);
  });

  it("should convert Fahrenheit to celsius", () => {
    expect(fahrenheitToCelsius(80)).toBe(26.67);
  });
});

describe("celsiusToFahrenheit", () => {
  it("should convert Celsius to Fahrenheit", () => {
    expect(celsiusToFahrenheit(26)).toBe(78.8);
  });

  it("should convert Celsius to Fahrenheit", () => {
    expect(celsiusToFahrenheit(20)).toBe(68);
  });
});
