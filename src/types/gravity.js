// @flow

/**
 * originalGravity
 * All grains and malt extracts have a points per pound per gallon (PPG) rating.
 * This is what the specific gravity would be if you added one pound of grain
 * or malt to enough water for a one gallon solution, take a hydrometer reading
 * and that would be the PPG. For instance, if you added 1 pound of liquid
 * malt extract to a bucket, added enough water to bring that to a gallon and
 * took a hydrometer reading of 1.034, the liquid malt extract would have a
 * PPG of 34.
 * @param  {number} amountOfExtract - in lbs
 * @param  {number} pointsPerGallon - PPG of the extract
 * @param  {number} batchSize
 * @return {number}
 */
export const originalGravity = (
  amountOfExtract: number,
  pointsPerGallon: number,
  batchSize: number
) => {
  return (amountOfExtract * pointsPerGallon) / batchSize;
};

export const originalGravityByEfficiency = (
  amountOfExtract: number,
  pointsPerGallon: number,
  efficiency: number,
  batchSize: number
) => {
  return (amountOfExtract * pointsPerGallon * efficiency) / batchSize;
};

/**
 * Alcohol by Volume (ABV)
 * ABV = (1.05/0.79) x ((OG – TG) / FG)  x 100
 * @param {number} og - orginal gravity or starting gravity
 * @param {number} fg - final gravity or your target gravity
 * @return {number} ABV
 */
export const abv = (og: number, fg: number) => {
  return (1.05 / 0.79) * ((og - fg) / fg) * 100;
};

/**
 * Alcohol by Weight (ABW)
 * formula: ((Original Gravity - Final Gravity) * 1.05) / Final Gravity
 * @param {number} og - orginal gravity or starting gravity
 * @param {number} fg - final gravity or your target gravity
 */
export const abw = (og: number, fg: number) => {
  return ((og - fg) * 1.05) / fg;
};

/**
 * Convert ABW to ABV
 * formula: To convert ABW to ABV you just need to divide by the density
 * of ethyl alcohol which is 789.00 kg/m³ or 0.79
 * @param {number} abw
 */
export const abwToAbv = (abw: number) => {
  return abw / 0.79;
};

/**
 * SG (specific gravity) to Plato
 * @param  {number} sg - specific gravity
 * @return {number}    - plato
 */
export const plato = (sg: number) => {
  //(-1 * 616.868) + (1111.14 * sg) – (630.272 * sg^2) + (135.997 * sg^3)
  return (
    -1 * 616.868 +
    1111.14 * sg -
    630.272 * Math.pow(sg, 2) +
    135.997 * Math.pow(sg, 3)
  );
};

/**
 * Attenuation
 * The amount of gravity that disappears from your wort is called attenuation
 * This is a percentage letting you know how much the density will drop or how
 * much sugar the yeast will consume. Yeast manufacturers will publish the
 * apparent attenuation ranges of their yeast strains. Most yeast strains
 * attenuation is between 65% - 85%
 * @param  {number} og - orginal gravity or starting gravity
 * @param  {number} fg - final gravity or your target gravity
 * @return {number}
 */
export const attenuation = (og: number, fg: number) => {
  return ((og - fg) / (og - 1)) * 100;
};

export const finalGravity = (
  totalGravityPoints: number,
  attentuation: number
) => {
  return 1 + (totalGravityPoints * (1 - attentuation)) / 1000;
};

export const gravityCorrection = (
  gravity: number,
  temperature: number,
  calibration: number
) => {
  //((1.313454 - (0.132674*F) + (0.00205779 * F^2) - (0.000002627634 * F^2)))
  // f = temperature in fahrenheit
  //
  return;
};

/**
 * Malt Color Units (MCU)
 * color of each grain times the grain weight in pounds divided by the batch
 * volume in gallons. When more then one fermentable is used, color is
 * calculated for each fermentable then added together.
 * @param {Number} grainColor - lovibond number
 * @param {Number} grainWeighInlbs
 * @param {Number} volumeInGallons
 */
export const mcu = (
  grainColor: number,
  grainWeighInlbs: number,
  volumeInGallons: number
) => {
  return (grainColor * grainWeighInlbs) / volumeInGallons;
};

/**
 * Standard Reference Method (SRM)
 * The SRM method contains the procedure of a spectrophotometer to measure the
 * light of a specific wavelength, 430 nanometers, as it passes through a sample
 * of homebrew contained in a cuvette in the light path of the
 * spectrophotometer. Lighter values have a lower SRM number and darker values
 * have a higher SRM number. SRM values over 50 are considered black.
 * formula: 1.49 * (MCU * 0.69)
 * source: http://brewgr.com/calculations/srm-beer-color
 * @param {number} grainWeightInlbs
 * @param {number} lovibond
 * @param {number} volumeInGallons
 */
export const srm = (
  grainWeightInlbs: number,
  lovibond: number,
  volumeInGallons: number
) => {
  return 1.49 * (mcu(lovibond, grainWeightInlbs, volumeInGallons) * 0.69);
};

/**
 * Calories From Carbs
 * @param  {number} og - orginal gravity or starting gravity
 * @param  {number} fg - final gravity or your target gravity
 * @return {number}
 */
export const caloriesFromCarbs = (og: number, fg: number) => {
  return 3550.0 * fg * (0.1808 * og + 0.8192 * fg - 1.0004);
};

/**
 * Calories From Alcohol
 * @param  {number} og - orginal gravity or starting gravity
 * @param  {number} fg - final gravity or your target gravity
 * @return {number}
 */
export const caloriesFromAlcohol = (og: number, fg: number) => {
  return (1881.22 * fg * (og - fg)) / (1.775 - og);
};

/**
 * Total calories
 * @param  {number} og - orginal gravity or starting gravity
 * @param  {number} fg - final gravity or your target gravity
 * @return {number}
 */
export const totalCalories = (og: number, fg: number) => {
  return caloriesFromAlcohol(og, fg) + caloriesFromCarbs(og, fg);
};
