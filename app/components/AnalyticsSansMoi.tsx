"use client";

import { Analytics } from "@vercel/analytics/next";

// Vercel Analytics compte toutes les visites, y compris les miennes.
// Pour m'exclure, une seule fois par navigateur, dans la console du site :
//   localStorage.setItem("enosi-exclure", "1")
// La fonction beforeSend ne peut pas être passée depuis un composant serveur,
// d'où ce petit composant client.
export default function AnalyticsSansMoi() {
  return (
    <Analytics
      beforeSend={(event) => {
        try {
          if (localStorage.getItem("enosi-exclure") === "1") return null;
        } catch {
          // stockage indisponible : on laisse passer l'événement
        }
        return event;
      }}
    />
  );
}
