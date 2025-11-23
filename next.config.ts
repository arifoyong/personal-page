import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://4rifoppo-chatbot.s3.ap-southeast-1.amazonaws.com/**')
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self' https://arifoyong.xyz; style-src 'self' 'unsafe-inline'; image-src 'self' 4rifoppo-chatbot.s3.ap-southeast-1.amazonaws.com *.google-analytics.com *.googletagmanager.com; connect-src 'self' *.google-analytics.com *.googletagmanager.com; script-src 'self' *.google-analytics.com *.googletagmanager.com 'unsafe-inline'; font-src 'self' https://fonts.googleapis.com",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Permissions-Policy',
            value: "camera=(); battery=(self); geolocation=(); microphone=()",
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  poweredByHeader: false,
};

export default nextConfig;
