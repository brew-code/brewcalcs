// @flow

export const fahrenheitToCelsius = (fahrenheit: number) => {
  return +((fahrenheit - 32) / 1.8).toFixed(2);
};

export const celsiusToFahrenheit = (celsius: number) => {
  return +(celsius * 1.8 + 32).toFixed(2);
};
