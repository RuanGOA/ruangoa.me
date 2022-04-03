import Image1 from '../assets/backgrounds/image1.jpeg';
import Image2 from '../assets/backgrounds/image2.jpeg';
import Image3 from '../assets/backgrounds/image3.jpeg';
import Image4 from '../assets/backgrounds/image4.jpeg';
import Image5 from '../assets/backgrounds/image5.jpeg';
import Image6 from '../assets/backgrounds/image6.jpeg';

export function getBackgroundPath() {
  const backgroundList = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
  ];

  return backgroundList[Math.floor((Math.random() * backgroundList.length))];
}
