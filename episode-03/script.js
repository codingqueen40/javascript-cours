// Code Streak — épisode 3
const OBJECTIF = 7;

let jours = 0;
let record = 0;

const boutonCode = document.querySelector("#btn-code");
const boutonReset = document.querySelector("#btn-reset");
const message = document.querySelector("#message");
const affichageRecord = document.querySelector("#record");

boutonCode.addEventListener("click", () => {
    jours = jours + 1;

    if (jours > record) {
        record = jours;
    }

    const joursRestants = OBJECTIF - jours;

    if (joursRestants > 0) {
        message.textContent = `${jours} jour(s) 🔥 Plus que ${joursRestants} avant ton objectif !`;
    } else {
        message.textContent = `${jours} jours : objectif atteint 🏆`;
    }

    affichageRecord.textContent = `Record : ${record} jour(s)`;
});

boutonReset.addEventListener("click", () => {
    jours = 0;
    message.textContent = "Pas grave, on repart ! 💪";
});
