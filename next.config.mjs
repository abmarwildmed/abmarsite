const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      { source: '/academicos-ligas', destination: '/ligas-academicas', permanent: true },
      { source: '/inicio-2', destination: '/', permanent: true },
    ];
  },
};
export default nextConfig;
