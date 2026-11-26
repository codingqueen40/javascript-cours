# Épisode 3 · Variables : `let`, `const`… et le procès de `var`

🇫🇷 [Français](#fr) · 🇬🇧 [English](#en)

<a id="fr"></a>

Code Streak gagne un **record** (la solution du défi de l'épisode 2) et un **objectif** de 7 jours avec un compte à rebours.

```
episode-03/
├── index.html         → + le paragraphe du record
├── style.css          → inchangé
├── script.js          → + record, OBJECTIF, joursRestants
└── demos-console.js   → toutes les démos de la console, dans l'ordre de la vidéo
```

- [`index.html`](index.html)
- [`style.css`](style.css)
- [`script.js`](script.js)
- [`demos-console.js`](demos-console.js) : un aide-mémoire, à taper dans la console (pas à lancer comme un fichier)

## Ce qui a changé depuis l'épisode 2

**`index.html`**, sous le message :

```html
<p id="record">Record : 0 jour</p>
```

**`script.js`** : la boîte `OBJECTIF` (`const`, un réglage), la boîte `record` (`let`, elle change), l'élément
`affichageRecord`, et dans le clic la boîte `joursRestants`, créée **dans** sa pièce.

> La règle de l'épisode : **`const` par défaut · `let` si ça change · `var` jamais.**

## 🎯 Ta mission de la semaine

Quand tu **bats ton record**, Code Streak affiche « 🎉 Nouveau record ! », mais seulement au moment où tu le bats.
Indice : tout se passe dans le `if (jours > record) { … }`. Solution au début de l'épisode 4 : [episode-04](../episode-04/).

⬅️ [Tous les épisodes](../README.md#fr)

<a id="en"></a>

---

## 🇬🇧 English · Episode 3 — Variables: `let`, `const`… and the trial of `var`

Code Streak gets a **record** (the solution to episode 2's challenge) and a **7-day goal** with a countdown.

```
episode-03/
├── index.html         → + the record paragraph
├── style.css          → unchanged
├── script.js          → + record, OBJECTIF (goal), joursRestants (days left)
└── demos-console.js   → every console demo, in the order of the video
```

`demos-console.js` is a cheat sheet to type in the console (not a file to run). Open a **fresh `about:blank` tab**
before each part, and for multi-line blocks press **Shift + Enter** between lines and **Enter** only at the end.

### What changed since episode 2

**`index.html`**, under the message:

```html
<p id="record">Record : 0 jour</p>
```

**`script.js`**: the `OBJECTIF` box (`const`, a setting), the `record` box (`let`, it changes), the `affichageRecord`
element, and inside the click the `joursRestants` box, created **inside** its own room (scope).

> The rule of the episode: **`const` by default · `let` if it changes · never `var`.**

### 🎯 This week's mission

When you **beat your record**, Code Streak shows "🎉 Nouveau record !" (*New record!*), but only at the moment you beat it.
Hint: it all happens inside `if (jours > record) { … }`. Solution at the start of episode 4: [episode-04](../episode-04/).

⬅️ [All episodes](../README.md#en)
