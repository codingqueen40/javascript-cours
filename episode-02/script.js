// Code Streak — épisode 2
let jours = 0;

const boutonCode = document.querySelector("#btn-code");
const boutonReset = document.querySelector("#btn-reset");
const message = document.querySelector("#message");

boutonCode.addEventListener("click", () => {
    jours = jours + 1;

    if (jours < 3) {
        message.textContent = `${jours} jour(s) : c'est parti !`;
    } else if (jours < 7) {
        message.textContent = `${jours} jours d'affilée 🔥 Continue !`;
    } else {
        message.textContent = `${jours} jours ! Rien ne t'arrête 💪`;
    }
});

boutonReset.addEventListener("click", () => {
    jours = 0;
    message.textContent = "Pas grave, on repart ! 💪";
});