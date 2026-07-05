import Image from "next/image";

const liens: Record<string, { label: string; href: string }[]> = {
  "Mes offres": [
    { label: "Pilotage financier & ROI Data/IA", href: "/offres/data-ia" },
    { label: "Pilotage de la performance", href: "/offres/pilotage" },
    { label: "Efficacité et création de valeur", href: "/offres/efficacite" },
    { label: "Audit 5 jours — prix fixe", href: "/offres/quick-win" },
  ],
  "Secteurs": [
    { label: "ETI industrielles", href: "/secteurs/eti-industrielle" },
    { label: "Direction financière", href: "/secteurs/direction-financiere" },
    { label: "Direction transformation", href: "/secteurs/direction-transformation" },
  ],
  "Mon approche": [
    { label: "Comment j'interviens", href: "/#methode" },
    { label: "Ce qui me distingue", href: "/#methode" },
    { label: "Ma méthode", href: "/#methode" },
  ],
  "Interventions": [
    { label: "Exemples de missions", href: "/portfolio" },
    { label: "Cas d'usage", href: "/portfolio" },
  ],
  "À propos": [
    { label: "Qui je suis", href: "/a-propos" },
    { label: "Mon positionnement", href: "/a-propos" },
    { label: "Diagnostic gratuit", href: "/diagnostic" },
    { label: "Contact", href: "/contact" },
  ],
};

const legalLinks: { label: string; href: string }[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Cookies", href: "/politique-confidentialite" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <Image src="/logo-full.svg" alt="Enosi Consulting" width={150} height={34} />
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-5 max-w-[220px]">
              Conseil indépendant en performance, data &amp; IA — William Saint-Dizier.
            </p>
            <a
              href="/contact"
              className="inline-block px-4 py-2 text-xs font-semibold text-white rounded-full transition-colors"
              style={{background:'linear-gradient(135deg,#1a9e5c,#157a47)'}}
            >
              Me contacter
            </a>
            <a
              href="https://www.linkedin.com/in/williamsaintdizier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-xs text-gray-600 hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Liens */}
          {Object.entries(liens).map(([categorie, items]) => (
            <div key={categorie}>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                {categorie}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-xs text-gray-600 hover:text-gray-300 transition-colors leading-snug block">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1e1e1e] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-700">
            © 2026 Enosi Consulting. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-gray-700 hover:text-gray-400 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
