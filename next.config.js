const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
]);

const nextConfig = withTM({
  reactStrictMode: true,
  styledComponents: {
    displayName: true,
    ssr: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
});

module.exports = nextConfig;
