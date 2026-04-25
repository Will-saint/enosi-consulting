import Image from "next/image";

const liens: Record<string, { label: string; href: string }[]> = {
  "Nos offres": [
    { label: "Pilotage de la performance", href: "/offres/pilotage" },
    { label: "Data & IA pour la décision", href: "/offres/data-ia" },
    { label: "Efficacité et création de valeur", href: "/offres/efficacite" },
  ],
  "Notre approche": [
    { label: "Comment nous intervenons", href: "/#methode" },
    { label: "Ce qui nous distingue", href: "/#methode" },
    { label: "Notre méthode", href: "/#methode" },
  ],
  "Interventions": [
    { label: "Exemples de missions", href: "/portfolio" },
    { label: "Cas d'usage", href: "/portfolio" },
  ],
  "Cabinet": [
    { label: "À propos", href: "/a-propos" },
    { label: "Notre positionnement", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
};

const legalLinks: { label: string; href: string }[] = [
  { label: "Mentions légales", href: "/contact" },
  { label: "Politique de confidentialité", href: "/contact" },
  { label: "Cookies", href: "/contact" },
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
              Cabinet de conseil en performance et création de valeur, finance, data et IA.
            </p>
            <a
              href="/contact"
              className="inline-block px-4 py-2 text-xs font-semibold text-white rounded-full transition-colors"
              style={{background:'linear-gradient(135deg,#1a9e5c,#157a47)'}}
            >
              Nous contacter
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
