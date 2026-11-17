// =====================================================================
//  JavaScript 2026 · Épisode 1 — Ta 1ʳᵉ mini-app JavaScript, sans rien installer
//  Tout se tape dans la CONSOLE du navigateur (Chrome ou Firefox) :
//    Mac : Cmd + Option + J (Chrome) · Cmd + Option + K (Firefox)
//    Windows : F12, puis l'onglet « Console »
//  Tape le code toi-même (Chrome peut bloquer le collage dans la console).
//  Plusieurs lignes d'un coup : Maj + Entrée pour aller à la ligne, Entrée pour exécuter.
// =====================================================================


// ---------- Le hook : « je retourne ce site en 2 lignes » (sur n'importe quel site) ----------
document.body.style.filter = "invert(1)";
document.querySelector("h1").textContent = "Ce site m'appartient 😎";


// ---------- Niveau 1 : ouvre la console ----------
2 + 2                                  // 4
"Codingqueen40".length                 // 13 : le nombre de lettres
alert("Je code en JavaScript 🎉")


// ---------- Niveau 2 : prends le contrôle d'une page (le DOM) ----------
document.querySelector("h1")
document.querySelector("h1").textContent = "JavaScript, c'est facile";
document.querySelector("h1").style.color = "deeppink";
document.querySelectorAll("h2, p").forEach(el => el.textContent = "🐼");
// Appuie sur F5 : tout revient. Ton JavaScript ne modifie que TA copie de la page (côté client).


// ---------- Niveau 4 : Code Streak, ta 1ʳᵉ mini-app ----------
// Tape about:blank dans la barre d'adresse, ouvre la console, puis tape tout le bloc :
let jours = 0;

const bouton = document.createElement("button");
bouton.textContent = "J'ai codé aujourd'hui ✅";
document.body.append(bouton);

const message = document.createElement("p");
document.body.append(message);

bouton.addEventListener("click", () => {
  jours = jours + 1;

  if (jours < 3) {
    message.textContent = `${jours} jour(s) : c'est parti !`;
  } else if (jours < 7) {
    message.textContent = `${jours} jours d'affilée 🔥 Continue !`;
  } else {
    message.textContent = `${jours} jours ! Rien ne t'arrête 💪`;
  }
});

// Bonus : un peu de style
bouton.style.fontSize = "2rem";
bouton.style.padding = "1rem 2rem";
message.style.fontSize = "1.5rem";


// ---------- Niveau 5 : casse ton code (exprès) ----------
// La faute de frappe « consol » est VOLONTAIRE : lis le message d'erreur en rouge.
console.log("Étape 1 ☕"); consol.log("Étape 2 👧👦"); console.log("Étape 3 🏫");
// → « Étape 1 ☕ », puis : Uncaught ReferenceError: consol is not defined
