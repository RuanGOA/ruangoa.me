import localFont from 'next/font/local';

export const robotoSlab = localFont({
  src: [
    {
      path: '../fonts/RobotoSlab-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/RobotoSlab-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/RobotoSlab-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/RobotoSlab-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/RobotoSlab-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/RobotoSlab-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-roboto-slab'
});

