import Image from "next/image";

const liens = {
  "Nos offres": [
    "Pilotage de la performance",
    "Data & IA pour la décision",
    "Efficacité et création de valeur",
  ],
  "Notre approche": [
    "Comment nous intervenons",
    "Ce qui nous distingue",
    "Notre méthode",
  ],
  "Interventions": [
    "Exemples de missions",
    "Cas d'usage",
  ],
  "Cabinet": [
    "À propos",
    "Notre positionnement",
    "Contact",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <Image src="/logo-full.svg" alt="Enosi Consulting" width={160} height={32} />
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-5 max-w-[220px]">
              Cabinet de conseil en performance et création de valeur — finance, data et IA.
            </p>
            <a
              href="/contact"
              className="inline-block px-4 py-2 text-xs font-semibold bg-[#3ddc84] text-black rounded-full hover:bg-[#2ab86e] transition-colors"
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
                  <li key={item}>
                    <a href="#" className="text-xs text-gray-600 hover:text-gray-300 transition-colors leading-snug block">
                      {item}
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
            {["Mentions légales", "Politique de confidentialité", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-xs text-gray-700 hover:text-gray-400 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
