/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    apiUrl: process.env.NEXT_SERVER_API_URL || "http://localhost:8000",
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  },
};
export default nextConfig;
