# VIPresta — site vitrine

Site one-page pour **VIPresta**, agence d'hôtesses, hôtes d'accueil et d'animations
événementielles de prestige (Paris / Haute-Savoie).

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · déploiement Vercel.

---

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run lint
```

---

## Déploiement Vercel via Git

1. Créer un dépôt vide sur GitHub (ex. `vipresta`).
2. Depuis ce dossier :

   ```bash
   git remote add origin git@github.com:<compte>/vipresta.git
   git branch -M main
   git push -u origin main
   ```

3. Sur [vercel.com](https://vercel.com) → **Add New… → Project** → importer le dépôt.
   Framework détecté automatiquement (Next.js), aucun réglage à changer.
4. Ajouter les variables d'environnement (onglet *Settings → Environment Variables*)
   si tu veux recevoir les demandes de contact par e-mail — voir `.env.example`.
5. Brancher le domaine dans *Settings → Domains*.

Chaque `git push` sur `main` redéploie la production ; les autres branches génèrent
des URLs de prévisualisation.

---

## Où modifier quoi

| Besoin | Fichier |
|---|---|
| Textes, services, animations, avis, clients, coordonnées | `src/lib/content.ts` |
| Couleurs, typographies, animations globales | `src/app/globals.css` (bloc `@theme`) |
| Structure de la page | `src/app/page.tsx` |
| Une section précise | `src/components/<Section>.tsx` |
| SEO, Open Graph, JSON-LD | `src/app/layout.tsx` |
| Image de partage (réseaux sociaux) | `src/app/opengraph-image.tsx` |
| Mentions légales / confidentialité | `src/app/mentions-legales/`, `src/app/confidentialite/` |

**Tout le contenu éditorial est dans `src/lib/content.ts`.** Aucun texte n'est codé en dur
dans les composants : une mise à jour du site se fait en modifiant ce seul fichier.

---

## Images

Les visuels de `public/images/` sont des **placeholders SVG** générés (fonds dégradés or/noir
portant la mention « PHOTO A REMPLACER »). Remplace-les par les vraies photos en gardant
**les mêmes noms de fichiers**, ou change les chemins dans `src/lib/content.ts`.

| Fichier | Emplacement | Ratio conseillé |
|---|---|---|
| `hero.svg` | fond de la bannière | 3:2 — 1920×1280 min |
| `about.svg` | section « À propos » | 4:5 portrait |
| `service-hotesses.svg` | carte Service 1 | 16:11 |
| `service-coordination.svg` | carte Service 2 | 16:11 |
| `service-animation.svg` | carte Service 3 | 16:11 |
| `prestige-led.svg` | Robe Plateau LED | 4:3 |
| `prestige-champagne.svg` | Robe Champagne | 4:3 |
| `prestige-moovika.svg` | Ceinture Moovika | 4:3 |
| `prestige-bar.svg` | Bar mobile | 4:3 |

En passant en `.jpg` / `.webp`, pense à mettre à jour les extensions dans
`src/lib/content.ts` et dans `src/components/Hero.tsx` / `About.tsx`.

Les logos clients sont pour l'instant du texte (`clients` dans `content.ts`). Pour des
logos images, déposer les fichiers dans `public/logos/` et adapter `src/components/Clients.tsx`.

---

## Formulaire de contact

`POST /api/contact` (`src/app/api/contact/route.ts`) :

- validation des champs obligatoires + format e-mail ;
- piège anti-robots (champ caché `website`) ;
- envoi via **Resend** si `RESEND_API_KEY`, `CONTACT_TO_EMAIL` et `CONTACT_FROM_EMAIL`
  sont définies ; sinon la demande est journalisée et l'utilisateur reçoit
  malgré tout une confirmation.

Pour brancher un autre service (Brevo, SMTP, webhook Make/n8n), il suffit de remplacer
l'appel `fetch` de ce fichier.

---

## Accessibilité & performances

- Contrastes vérifiés sur fond sombre, focus visible sur les champs.
- Toutes les animations respectent `prefers-reduced-motion`.
- Aucun script tiers, aucun cookie : pas de bandeau nécessaire en l'état.
- Polices auto-hébergées par `next/font` (pas d'appel à Google au runtime).
- Métadonnées, `sitemap.xml`, `robots.txt` et JSON-LD `ProfessionalService` inclus.

---

## À finaliser avant mise en ligne

- [ ] Remplacer les photos de `public/images/`
- [ ] Renseigner les vraies coordonnées dans `src/lib/content.ts` (`site`)
- [ ] Mettre `site.url` à l'URL définitive (utilisée par le sitemap et les balises canoniques)
- [ ] Compléter les mentions légales (champs entre crochets)
- [ ] Remplacer les avis de démonstration par les vrais avis Google
- [ ] Remplacer les noms de clients par les vrais partenaires

---

© VIPresta — développé par proIA Conseil.
