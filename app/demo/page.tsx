import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { seoConfig } from "../seo";
import DashboardDemo from "./DashboardDemo";
import RoiCalculator from "./RoiCalculator";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: seoConfig.demo.title,
  description: seoConfig.demo.description,
  openGraph: {
    title: seoConfig.demo.title,
    description: seoConfig.demo.description,
    url: 'https://enosi-consulting.vercel.app/demo',
  },
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div style={{ background: '#F2F0EC', padding: '7rem 1.5rem 4rem' }}>
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(30,30,30,0.35)', marginBottom: '1.5rem' }}>
              Exemple concret
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem,5vw,4.5rem)',
              fontWeight: 700, color: '#0f0f0f',
              lineHeight: 1.05, marginBottom: '1.5rem',
            }}>
              Voici ce que vos données<br />
              <span style={{ color: '#1a9e5c' }}>pourraient ressembler.</span>
            </h1>
            <p style={{ color: 'rgba(30,30,30,0.5)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
              Un tableau de bord financier réel, des alertes automatisées, un pilotage par la décision.
              Données fictives — architecture déployable en 8 semaines.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#dashboard" style={{
                padding: '0.875rem 2rem', borderRadius: '2rem',
                background: 'linear-gradient(135deg, #1a9e5c, #157a47)',
                color: '#fff', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(26,158,92,0.3)',
              }}>
                Voir le dashboard ↓
              </a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
                padding: '0.875rem 2rem', borderRadius: '2rem',
                border: '1.5px solid #1a9e5c',
                color: '#1a9e5c', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none',
              }}>
                Construire le mien →
              </a>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div id="dashboard">
          <DashboardDemo />
        </div>

        {/* ROI */}
        <RoiCalculator />

        {/* Final CTA */}
        <section style={{ background: '#F2F0EC', padding: '5rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ maxWidth: '36rem', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#0f0f0f', marginBottom: '1rem', lineHeight: 1.1 }}>
              Ce dashboard,<br />construit pour vous.
            </h2>
            <p style={{ color: 'rgba(30,30,30,0.5)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Un premier échange de 30 minutes pour comprendre vos indicateurs, vos sources de données et votre calendrier.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', padding: '1rem 3rem', borderRadius: '2rem',
              background: 'linear-gradient(135deg, #1a9e5c, #157a47)',
              color: '#fff', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(26,158,92,0.3)',
            }}>
              Réserver 30 minutes
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
