// =====================================================================
//  JavaScript 2026 · Épisode 4 — Les types de données : pourquoi 7 + 1 = 71
//  Les démos de la CONSOLE, dans l'ordre de la vidéo.
//
//  ⚠️ Une seule console pour tout l'épisode : celle de la page Code Streak
//     ouverte DANS CHROME (copie l'adresse 127.0.0.1:… de l'aperçu Live Preview,
//     colle-la dans Chrome, puis Cmd + Option + J).
//  ⚠️ Une ligne à la fois, Entrée après chaque ligne. Ce qui suit les deux
//     barres obliques ( // ) est le résultat à voir : pas besoin de le taper.
// =====================================================================


// ---------- Le bug des 71 jours ----------
const champObjectif = document.querySelector("#objectif");   // undefined (en gris : pas une erreur)
champObjectif.value + 1      // '71' 😱 (pas 8)


// ---------- Niveau 1 : typeof, la machine à tampons ----------
typeof 42                    // 'number'
typeof 3.14                  // 'number'  (la virgule s'écrit avec un point)
typeof "bonjour"             // 'string'
typeof true                  // 'boolean'
typeof undefined             // 'undefined'
typeof 10n                   // 'bigint'
typeof Symbol()              // 'symbol'
typeof null                  // 'object'  ← 🤨 le fossile de 1995 (niveau 5)

let truc = 42;
typeof truc                  // 'number'
truc = "quarante-deux";
typeof truc                  // 'string'  — même boîte, contenu différent, type différent


// ---------- Niveau 2 : les nombres (et NaN) ----------
Number.MAX_SAFE_INTEGER      // 9007199254740991
9007199254740993             // 9007199254740992 😱 (arrondi)

"pizza" * 2                  // NaN
typeof NaN                   // 'number' 😂
NaN === NaN                  // false 🤯
Number.isNaN(NaN)            // true ✅
1 / 0                        // Infinity


// ---------- Niveau 3 : BigInt, les très grands nombres ----------
9007199254740993n            // 9007199254740993n ✅ exact
2n ** 64n                    // 18446744073709551616n
10n + 1                      // ❌ TypeError: Cannot mix BigInt and other types, use explicit conversions
10n + 1n                     // 11n ✅


// ---------- Niveau 4 : textes et booléens ----------
let mot = "code";
mot[0] = "m";                // 'm' — la console répète ce que tu as essayé de ranger…
mot                          // 'code' — …mais rien n'a changé : une chaîne ne se modifie jamais

5 > 3                        // true
// jours > record            ← ne la tape pas : c'est la comparaison de Code Streak (true ou false selon le moment)


// ---------- Niveau 5 : null vs undefined ----------
let boiteNeuve;
boiteNeuve                   // undefined → personne n'y a touché

let choixCouleur = null;     // « pas encore de couleur choisie », volontairement

document.querySelector("#inexistant")   // null → « j'ai cherché, il n'y a rien »

// Pour tester si une valeur est null : pas typeof, mais
choixCouleur === null        // true

Symbol("id") === Symbol("id")   // false — un symbole est unique au monde


// ---------- Niveau 6 : le piège du + ----------
typeof champObjectif.value   // 'string' !!! tout ce qui sort d'un champ de formulaire est du texte

"7" + 1                      // '71'  ← le + colle
"7" - 1                      // 6     ← le - calcule
"7" * "2"                    // 14
true + 1                     // 2     ← true devient 1

// Mini-jeu « Ça colle ou ça calcule ? »
"5" + "5"                    // '55'      🧴 ça colle
10 - "4"                     // 6         🧮 ça calcule
"3" * "3"                    // 9         🧮 ça calcule
"Code" + 40                  // 'Code40'  🧴 ça colle

// La réparation : on transforme nous-mêmes le texte en nombre
Number(champObjectif.value) + 1   // 8 ✅


// ---------- La mission de la semaine ----------
Number("")                   // 0 — un champ vide transformé en nombre
