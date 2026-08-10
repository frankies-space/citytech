# CityTech website

Moderne Next.js-website voor **CityTech Engineering B.V.** — elektrotechniek, MW-batterijen (BESS) en zakelijke laadpalen.

Gebaseerd op de bestaande site [citytech.nl](https://citytech.nl) (kleuren, logo, diensten, contactgegevens), uitgebreid met nieuwe pijlers.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion, Lucide icons
- React Hook Form + Zod (contactformulier)
- PWA: web app manifest + service worker (installable, offline shell)

## PWA

- Manifest: `/manifest.webmanifest` (via `src/app/manifest.ts`)
- Icons: `/public/icons/`
- Service worker: `/public/sw.js` (registreert alleen in productie)
- Installeerbaar op telefoon/desktop (Chrome/Edge/Safari “Zet op beginscherm”)

## Video-strategie

Hero-video’s laden **niet** op mobiel, bij `prefers-reduced-motion`, of bij Save-Data / 2G. Dan tonen we een stilstaand poster-beeld. Op desktop speelt video alleen als de hero in beeld is (`preload="none"`). Video’s worden niet door de service worker gecached.

## Starten

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Productiebuild:

```bash
npm run build
npm start
```

Deploybaar op Vercel zonder extra configuratie.

## Pagina's

| Route | Inhoud |
|-------|--------|
| `/` | Homepage met drie pijlers |
| `/elektrotechniek` | Bestaande diensten (herschreven) |
| `/mw-batterijen` | BESS + ZTE E260C4 specs |
| `/laadpalen` | Zakelijke laadoplossingen |
| `/over-ons` | Bedrijf & team |
| `/contact` | Formulier (`?interesse=mw-batterijen` etc.) |
| `/projecten` | Referenties (placeholder visuals) |

## Branding (uit citytech.nl)

- Primair: `#b60901`
- Donker: `#222222`
- Fonts: Montserrat (koppen) + Manrope (body)
- Logo: `/public/logo/logo.png`

## Nog nodig van de klant (placeholders)

Zoek in de code naar `TODO:` comments. Belangrijkste open punten:

- **KVK / BTW** — invullen in `src/lib/site.ts`
- **Hero / team / pand / werkbusjes** — echte foto’s
- **Elektrotechniek-installatiefoto’s**
- **Laadpalen in gebruik**
- **Projectfoto’s** op `/projecten` (nu gradients)
- **Contactformulier-endpoint** — verzending nog niet gekoppeld (Resend/Formspree/etc.)
- **ZTE-productfoto** staat al op `/public/images/mw-batterijen/zte-e260c4.jpg`
- **Video’s:** `/public/videos/engineer.mp4` (home hero), `/public/videos/forest-drone.mp4` (MW-batterijen hero)
- **Stock visuals:** `/public/images/hero`, `/public/images/team`, `/public/images/energy` (tijdelijk tot eigen foto’s)
## Contact (live site)

- Zwarteweg 97, 1431 VK Aalsmeer
- 036 700 9700 · info@citytech.nl
