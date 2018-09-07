// @flow

/**
 *
 *
 * @param {number} weightInOz
 * @param {number} alphaAcids
 * @returns {number}
 */
export const AAU = (weightInOz: number, alphaAcids: number) => {
  return weightInOz * alphaAcids;
};

// Tinseth's IBU formula
export const tinseth = (
  postBoilOg: number,
  batchSize: number,
  aa: number = 0.0,
  amount: number = 0.0,
  time: number = 60,
  form: string = "pellet"
) => {
  const utilizationFactor = form === "pellet" ? 1.15 : 1.0;
  return (
    1.65 *
    Math.pow(0.000125, postBoilOg - 1.0) *
    ((1 - Math.pow(Math.E, -0.04 * time)) / 4.15) *
    (((aa / 100.0) * amount * 1000000) / batchSize) *
    utilizationFactor
  );
};
