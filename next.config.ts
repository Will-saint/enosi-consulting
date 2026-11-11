import type { NextConfig } from "next";
import path from "path";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self' https://va.vercel-scripts.com",
  "frame-ancestors 'none'",
  "frame-src 'self'",
  "base-uri 'self'",
  "form-action 'self' https://calendly.com",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  turbopack: {
    root: path.resolve('.'),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Page de démonstration privée : accessible par lien direct, jamais indexée.
      {
        source: "/grille-2027/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noimageindex" }],
      },
      {
        source: "/grille-2027",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noimageindex" }],
      },
    ];
  },
  async rewrites() {
    return [{ source: "/grille-2027", destination: "/grille-2027/index.html" }];
  },
  /**
   * L'ancien domaine Vercel restait accessible et servait le site à l'identique.
   * Google voyait donc deux sites jumeaux — la balise canonical limitait la casse,
   * mais une redirection permanente est plus propre et transfère l'autorité SEO
   * déjà accumulée vers le domaine définitif.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "enosi-consulting.vercel.app" }],
        destination: "https://enosi-consulting.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
