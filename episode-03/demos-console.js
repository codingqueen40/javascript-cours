// =====================================================================
//  JavaScript 2026 · Épisode 3 — Variables : let, const… et le procès de var
//  Les démos de la CONSOLE, dans l'ordre de la vidéo.
//
//  ⚠️ Ouvre un onglet about:blank NEUF avant chaque partie (effacer la console
//     n'efface pas les boîtes déjà créées).
//  ⚠️ Blocs de plusieurs lignes : Maj + Entrée entre les lignes, Entrée à la fin.
//     (Sinon la console exécute ligne par ligne et le résultat change.)
// =====================================================================


// ---------- Le bug du 42 qui devient du texte ----------
var name = 42;
typeof name            // 'string' 😱

// Nouvel onglet about:blank :
let name = 42;
typeof name            // 'number'


// ---------- Niveau 1 : une variable, c'est quoi ? (une ligne à la fois) ----------
let prenom = "Ingrid";   // 1. je crée la boîte ET je mets une valeur → undefined (en gris : pas une erreur)
prenom                   // 2. je lis le contenu → 'Ingrid'
prenom = "Grey";         // 3. je remplace le contenu
prenom                   // → 'Grey'


// ---------- Niveau 2 : let ou const ? ----------
let jours = 0;
jours = 1;               // ✅ aucun problème

const OBJECTIF = 7;
OBJECTIF = 10;           // ❌ TypeError: Assignment to constant variable.

const VILLE;             // ❌ SyntaxError: Missing initializer in const declaration

const courses = [];
courses.push("café");    // 1
courses.push("pâtes");   // 2
courses                  // ['café', 'pâtes'] ✅ ça marche !
courses = [];            // ❌ TypeError: Assignment to constant variable.
// const verrouille l'ÉTIQUETTE, pas le CONTENU.


// ---------- Niveau 3 : la portée (un seul bloc, Maj + Entrée) ----------
const maison = "toit commun";

if (true) {
  const cuisine = "casserole";
  console.log(maison);    // ✅ toit commun : je vois ce qui est dehors
  console.log(cuisine);   // ✅ casserole
}

console.log(cuisine);     // ❌ ReferenceError: cuisine is not defined


// ---------- Niveau 4 : le procès de var (onglet about:blank NEUF) ----------

// Pièce n°1 — var s'échappe des pièces (un seul bloc)
if (true) {
  var fuite = "je sors !";
}
console.log(fuite);       // "je sors !" 😱

// Pièce n°2 — var écrase sans prévenir (un seul bloc)
var jours = 0;
// … 300 lignes plus loin, quelqu'un d'autre écrit :
var jours = "lundi";
console.log(jours);       // "lundi" — aucune erreur, ton compteur a disparu

// … alors que let te prévient (les 2 lignes dans la même saisie)
let compteur = 0;
let compteur = "lundi";   // ❌ SyntaxError: Identifier 'compteur' has already been declared

// Pièce n°3 — var répond avant d'exister (les 2 lignes dans la même saisie)
console.log(avant);       // undefined — pas d'erreur ?!
var avant = "coucou";

console.log(apres);       // ❌ ReferenceError: Cannot access 'apres' before initialization
let apres = "coucou";

// Pièce n°4 (bonus) — le mystère du 42
var pseudo = "A";
let surnom = "B";
"pseudo" in window        // true  — var se range dans window
"surnom" in window        // false — let reste chez lui


// ---------- Niveau 5 : bien nommer ses variables (onglet about:blank NEUF) ----------
let 2jours = 0;           // ❌ SyntaxError (commence par un chiffre)
let jours-restants;       // ❌ SyntaxError (le tiret = un signe moins)
let let = 1;              // ❌ SyntaxError (mot réservé)
let prénom = "Ingrid";    // ✅ ça marche… mais évite les accents

// ✅ camelCase et MAJUSCULES pour les réglages
const OBJECTIF_JOURS = 7;
let joursRestants = 4;
