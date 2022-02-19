import Image1 from '../assets/backgrounds/image1.jpeg';

export function getBackgroundPath() {
  const backgroundList = [
    Image1
  ];

  return backgroundList[Math.floor((Math.random()*backgroundList.length))];
}
