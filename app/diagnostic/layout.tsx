import type { Metadata } from "next";
import { seoConfig } from "../seo";

export const metadata: Metadata = {
  title: seoConfig.diagnostic.title,
  description: seoConfig.diagnostic.description,
  openGraph: {
    title: seoConfig.diagnostic.title,
    description: seoConfig.diagnostic.description,
  },
};

export default function DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
