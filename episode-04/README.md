# Épisode 4 · Les types de données : pourquoi 7 + 1 = 71

🇫🇷 [Français](#fr) · 🇬🇧 [English](#en)

<a id="fr"></a>

Code Streak gagne un **champ « objectif » réglable**… et un vrai bug de type (`"7" + 1` donne `"71"`), qu'on corrige avec `Number()`.
On y trouve aussi la **solution de la mission de l'épisode 3** : le message « 🎉 Nouveau record ! ».

```
episode-04/
├── index.html         → + le champ « Mon objectif » (<label> + <input>)
├── style.css          → inchangé
├── script.js          → + nouveauRecord, champObjectif, Number(champObjectif.value)
└── demos-console.js   → toutes les démos de la console, dans l'ordre de la vidéo
```

- [`index.html`](index.html)
- [`style.css`](style.css)
- [`script.js`](script.js)
- [`demos-console.js`](demos-console.js) : un aide-mémoire, à taper dans la console (pas à lancer comme un fichier)

## Ce qui a changé depuis l'épisode 3

**`index.html`**, juste au-dessus des deux boutons :

```html
<label for="objectif">Mon objectif (jours) :</label>
<input id="objectif" type="number" value="7" min="1">
```

**`script.js`** :

- la ligne `const OBJECTIF = 7;` est **supprimée** : c'est l'utilisatrice qui choisit son objectif ;
- `champObjectif` va chercher le champ dans la page ;
- dans le clic, `const objectif = Number(champObjectif.value);` lit le champ et **transforme le texte en nombre** ;
- le drapeau `nouveauRecord` (un booléen : `false` au départ, `true` si le record tombe) affiche « 🎉 Nouveau record ! ».

> La règle de l'épisode : **tout ce qui sort d'un formulaire est du texte → `Number()` avant de calculer.**

🆘 Ton app ne réagit pas après la modification ? Enregistre (Cmd + S), puis recharge la page dans Chrome (Cmd + R).

## 🎯 Ta mission de la semaine

Vide complètement le champ objectif et clique : Code Streak affiche « objectif atteint 🏆 »… alors qu'il n'y a pas d'objectif !
(`Number("")` vaut `0`.) Si l'objectif est **vide, ou plus petit ou égal à 0**, affiche « Choisis d'abord un objectif 🎯 »
et ne compte rien. Indice : « plus petit ou égal » s'écrit `<=`. Solution au début de l'épisode 5.

⬅️ [Tous les épisodes](../README.md#fr)

<a id="en"></a>

---

## 🇬🇧 English · Episode 4 — Data types: why 7 + 1 = 71

Code Streak gets an **adjustable "goal" field**… and a real type bug (`"7" + 1` gives `"71"`), which we fix with `Number()`.
It also contains the **solution to episode 3's mission**: the "🎉 Nouveau record !" (*New record!*) message.

```
episode-04/
├── index.html         → + the "Mon objectif" (My goal) field (<label> + <input>)
├── style.css          → unchanged
├── script.js          → + nouveauRecord (new record), champObjectif (goal field), Number(champObjectif.value)
└── demos-console.js   → every console demo, in the order of the video
```

`demos-console.js` is a cheat sheet to type in the console (not a file to run). Use **one console for the whole episode**:
the Code Streak page opened **in Chrome** (copy the `127.0.0.1:…` address from the Live Preview, paste it in Chrome,
then Cmd + Option + J). Type one line at a time and press **Enter** after each line.

### What changed since episode 3

**`index.html`**, right above the two buttons:

```html
<label for="objectif">Mon objectif (jours) :</label>
<input id="objectif" type="number" value="7" min="1">
```

(*Mon objectif (jours)* = My goal (days).)

**`script.js`**:

- the line `const OBJECTIF = 7;` is **removed**: the user now picks her own goal;
- `champObjectif` fetches the field from the page;
- inside the click, `const objectif = Number(champObjectif.value);` reads the field and **turns the text into a number**;
- the `nouveauRecord` flag (a boolean: `false` at first, `true` when the record is beaten) shows "🎉 Nouveau record !".

> The rule of the episode: **everything that comes out of a form is text → `Number()` before you calculate.**

🆘 Your app doesn't react after the change? Save (Cmd + S), then reload the page in Chrome (Cmd + R).

### 🎯 This week's mission

Empty the goal field completely and click: Code Streak shows "objectif atteint 🏆" (*goal reached*)… with no goal at all!
(`Number("")` is `0`.) If the goal is **empty, or less than or equal to 0**, show "Choisis d'abord un objectif 🎯"
(*Pick a goal first*) and don't count anything. Hint: "less than or equal" is written `<=`. Solution at the start of episode 5.

⬅️ [All episodes](../README.md#en)
