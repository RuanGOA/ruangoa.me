/** @type {import('next').NextConfig} */
const exp = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default exp;
