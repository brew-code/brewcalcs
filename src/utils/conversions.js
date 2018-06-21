// @flow

export const kgToOz = (k: number) => k * 35.27396195;

/**
 * Convert kg to lbs
 * @param  {number} kg
 * @return {number}
 */
export const kgToLb = (kg: number) => {
  return +(Math.floor((kg / 2.20462) * 1000000) / 1000000).toFixed(6);
};

/**
 * Convert lb to kg
 * @param  {number} lb
 * @return {number}
 */
export const lbToKg = (lb: number) => {
  return +(lb * 2.20462).toFixed(6);
};

/**
 * kg to Lb and Oz
 * @param  {number} kg
 * @return {Object}    - Object with lb and oz
 */
export const kgTolbOz = (kg: number) => {
  const lb = kgToLb(kg);
  return { lb: Math.floor(lb), oz: (lb - Math.floor(lb)) * 16.0 };
};
