╔══════════════════════════════════════════════════════════╗
║           PORTFOLIO — GUIDE DE DÉPLOIEMENT               ║
╚══════════════════════════════════════════════════════════╝

► POUR PERSONNALISER
   Éditez UNIQUEMENT : js/data.js
   → Modifiez PROFIL (nom, bio, contact, liens)
   → Modifiez FORMATIONS, COMPETENCES, EXPERIENCES, PROJETS
   Tout le site se met à jour automatiquement.

► STRUCTURE DES FICHIERS
   loading.html       ← Page d'entrée (choix Spotify / Arcanes)
   index.html         ← Portfolio style Spotify
   index.html    ← Portail des 5 arcanes
   tarot.html         ← Toutes les arcanes (tirage)
   arcanes.html       ← Liste complète des cartes
   runes.html         ← Formations
   constellation.html ← Compétences
   chaudron.html      ← Projets
   cristal.html       ← Expériences
   js/data.js         ← ★ TOUTES LES DONNÉES ★

► DÉPLOIEMENT NETLIFY (recommandé, gratuit)
   1. Allez sur https://netlify.com → Sign up gratuit
   2. Depuis le dashboard : "Add new site" → "Deploy manually"
   3. Glissez-déposez ce dossier portfolio/ dans la zone de drop
   4. Votre site est en ligne en 30 secondes !
   5. URL type : https://votre-nom.netlify.app
   (Vous pouvez configurer un domaine personnalisé ensuite)

► DÉPLOIEMENT GITHUB PAGES
   1. Créez un repo GitHub (ex: "portfolio")
   2. Uploadez tous ces fichiers à la racine
   3. Settings → Pages → Source: main branch / root
   4. URL type : https://username.github.io/portfolio

► TESTER EN LOCAL
   Dans ce dossier, lancez :
   python3 -m http.server 8000
   Puis ouvrez : http://localhost:8000/loading.html








------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



La page constellation affiche une carte du ciel interactive où chaque groupe d'étoiles représente une compétence. Voici comment ça fonctionne et comment la personnaliser.J'ai une vue complète du système. Voici l'explication complète :

---

## Comment fonctionnent les constellations

Le canvas dessine une **carte du ciel** automatiquement à partir de tes compétences dans `data.js`. Chaque compétence appartient à un **groupe constellation** via le champ `constellation:`.

### Structure dans `data.js`

Chaque compétence a un champ `constellation` qui la rattache à un groupe :

```js
{ id:'c1', name:'Python', constellation:'serpentis', ... }
{ id:'c2', name:'PyTorch', constellation:'ignis',    ... }
{ id:'c3', name:'HuggingFace', constellation:'linguae', ... }
```

### Les 4 constellations actuelles (définies dans `constellation.html`)

| Clé | Nom affiché | Couleur | Thème |
|-----|------------|---------|-------|
| `serpentis` | Serpentis | 🟠 Orange | Data & Python |
| `ignis` | Ignis | 🔴 Rouge | Deep Learning |
| `linguae` | Linguae | 🟣 Violet | NLP & LLM |
| `nebula` | Nebula | 🔵 Bleu | Cloud & DevOps |

Les étoiles du même groupe sont **reliées par des lignes** et partagent la même couleur. Il y a aussi un nuage de nébuleuse coloré autour de chaque groupe.

### Pour ajouter / modifier une constellation

Dans `constellation.html`, vers la ligne 232, tu trouveras :

```js
const CONSTELLATIONS = {
  serpentis: { name:'Serpentis', color:'#ff6437', label:'Data & Python' },
  ignis:     { name:'Ignis',     color:'#ee4b28', label:'Deep Learning' },
  // ← ajoute une ligne ici pour créer un nouveau groupe
  machin:    { name:'Machin',    color:'#1db954', label:'Nouveau groupe' },
};
```

Puis dans `data.js`, assigne `constellation:'machin'` à la compétence correspondante.

### Positions sur le canvas

Les compétences sont placées selon le tableau `POSITIONS[]` dans `constellation.html` — 10 positions prédéfinies en `%` du canvas `(x, y)`. La compétence `c1` prend la position 0, `c2` la position 1, etc.

```js
const POSITIONS = [
  { x:0.12, y:0.25 },  // ← c1 (Python) — gauche haut
  { x:0.30, y:0.55 },  // ← c2 (PyTorch) — centre gauche
  { x:0.42, y:0.18 },  // ← c3 (HuggingFace) — centre haut
  ...
];
```

Tu peux réorganiser ces coordonnées pour changer la forme des constellations. `x:0` = bord gauche, `x:1` = bord droit, `y:0` = haut, `y:1` = bas.

---

**En résumé** : pour personnaliser, tu touches deux endroits :
1. **`js/data.js`** → champ `constellation:` de chaque compétence
2. **`constellation.html`** → le dictionnaire `CONSTELLATIONS` (nom, couleur, thème) et le tableau `POSITIONS` (placement sur le canvas)









------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



In `js/data.js`, two things:

**To hide a link** — set it to an empty string `''`:
```js
contact: {
  email:    'j.smith@ed.ac.uk',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github:   'https://github.com/yourprofile',
  twitter:  '',   // ← empty = hidden, won't appear
  scholar:  '',   // ← hidden
  cv:       'https://yoursite.com/cv.pdf',
},
```

**To rename a stat label** — the labels are defined in `index.html` inside the `INIT_JS` block. But the cleaner way is to just change the keys in `data.js` and their labels in `index.html`. Let me show you the exact spot:So there are **two places** to edit:

---

**1. `js/data.js` — the numbers + hide links:**
```js
stats: {
  publications: 4,      // ← change the number
  projets:      3,
  competences:  8,
  annees_these: 2,
  // ← you can also add a new key here, e.g.:
  // citations: 120,
},

contact: {
  email:    'j.smith@ed.ac.uk',
  linkedin: 'https://linkedin.com/in/you',
  github:   'https://github.com/you',
  twitter:  '',        // ← '' = hidden
  scholar:  '',        // ← '' = hidden
  cv:       '',        // ← '' = hidden
},
```

**2. `index.html` — the stat labels** (search for `const labels = {`):
```js
const labels = {
  publications: '📄 Publications',
  projets:      '🚀 Projects',
  competences:  '⭐ Skills',
  annees_these: '🎓 Years of PhD',
  // ← if you added 'citations' in data.js, add it here too:
  // citations:  '💬 Citations',
};
```

The key names in `data.js` → `stats: {}` must match exactly the key names in `index.html` → `const labels = {}`. If you remove a key from `stats`, it simply won't appear. If you add one, add its label here too.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------







The rendering is already patched on all pages — the issue is just that the `emoji` field in `data.js` still has emojis. You just need to swap the values there.

Here's exactly what to change in `js/data.js` for each skill:

```js
// BEFORE
{ id:'c1', emoji:'🐍', name:'Python', ... }

// AFTER — just replace the emoji string with the URL
{ id:'c1', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name:'Python', ... }
```

**Ready-to-paste URLs for your current skills:**

```js
// Python
emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'

// PyTorch
emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'

// HuggingFace — no devicon, use their logo
emoji:'https://huggingface.co/front/assets/huggingface_logo-noborder.svg'

// Cloud / AWS
emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'

// Pandas
emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'

// Docker
emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'

// TensorFlow
emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'

// Maths — no logo, keep the emoji
emoji:'📐'
```

For tarot and chaudron specifically, the card face renders the `emoji` field inside a `<div class="card-emoji">` — it's already patched to detect URLs and render an `<img>` instead of text. Same for the cauldron ingredients and modal thumbnails.

For anything not on devicon, just Google `[toolname] logo svg` and grab any direct SVG URL, or host the file yourself in the project folder and use a relative path like `emoji:'img/mylogo.svg'`.



Same thing — just put the image URL directly. The renderer handles any image format:

```js
// PNG works fine
emoji:'https://example.com/logo.png'

// JPG too
emoji:'https://example.com/photo.jpg'

// Local file in your project folder
emoji:'img/python.png'
```

**If you have the image file on your computer**, just:
1. Create an `img/` folder inside your `portfolio/` folder
2. Drop your image files in there
3. Reference them with a relative path:

```js
{ id:'c1', emoji:'img/python.png', name:'Python', ... }
```

The only thing to watch is that PNGs/JPGs with a coloured background will show that background. If it looks ugly on the dark card, either:
- Use a PNG with **transparent background** (most logo PNGs have this)
- Or add a CSS `border-radius` to make it circular — but that's already handled by the renderer's `object-fit:contain` which just scales it cleanly inside its box without cropping

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


For tarot card background colour — it's the gradient field in data.js for each entry:
js{ id:'c1', name:'Python', 
  gradient:'linear-gradient(160deg,#1a0e0a,#c0392b)',  // ← this
  ...
}
It's a standard CSS gradient — two colours, from top-left to bottom-right. Examples:
jsgradient:'linear-gradient(160deg,#0a0a1a,#450af5)'  // deep blue→purple
gradient:'linear-gradient(160deg,#0a1a0a,#1db954)'  // dark→green  
gradient:'linear-gradient(160deg,#1a0a0a,#c0392b)'  // dark→red
gradient:'linear-gradient(160deg,#1a1a0a,#b45309)'  // dark→amber

https://cssgradient.io
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



Two questions + one fix — let me do them all.Now I have everything. The theme colour is split across two places:

1. **`:root` CSS vars** in each page (e.g. `--green`, `--purple`, `--blue`) — controls buttons, glows, highlights
2. **The nav CSS block** injected at the bottom of `<style>` — controls nav accent, logo glow, underline

Let me do all three fixes:Done. To answer your question on where colours live:

**Per-page theme colour** — defined in two places in each HTML file:
1. `:root { --purple / --green / --blue ... }` at the top of `<style>` — controls glows, buttons, borders
2. The nav CSS block near the bottom of `<style>` — controls nav logo, underline, hover

**Card gradient** — in `js/data.js`, the `gradient:` field on each item. That's purely the card background, independent of the page theme.

**Current page themes:**
| Page | Accent |
|------|--------|
| Tarot + Arcanes | 🔴 Red `#e74c3c` |
| Runes | 🟡 Gold `#c9a84c` |
| Constellation | 🔵 Blue `#4a9eff` |
| Chaudron | 🟢 Green `#1db954` |
| Cristal | 🟣 Purple `#a855f7` |

https://cssgradient.io