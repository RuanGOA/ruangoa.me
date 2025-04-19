/** @type {import('next').NextConfig} */
const exp = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default exp;
