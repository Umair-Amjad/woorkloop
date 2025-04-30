/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SAMPLE_VARIABLE: process.env.NEXT_PUBLIC_SAMPLE_VARIABLE,
  },
};

export default nextConfig;
