/** @type {import('next').NextConfig} */
const exp = {
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default exp;
