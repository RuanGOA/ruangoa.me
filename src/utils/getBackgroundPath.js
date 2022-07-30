export function getBackgroundPath() {
  const backgroundQuantity = 6; //fs doesn't work in browser
  const randomNumber = Math.floor((Math.random() * backgroundQuantity) + 1);
  const image = require(`../assets/backgrounds/image${randomNumber}.jpeg`);

  return image
}
