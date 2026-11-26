// Code Streak — épisode 4
let jours = 0;
let record = 0;

const boutonCode = document.querySelector("#btn-code");
const boutonReset = document.querySelector("#btn-reset");
const message = document.querySelector("#message");
const affichageRecord = document.querySelector("#record");
const champObjectif = document.querySelector("#objectif");

boutonCode.addEventListener("click", () => {
    jours = jours + 1;

    let nouveauRecord = false;
    if (jours > record) {
        record = jours;
        nouveauRecord = true;
    }

    const objectif = Number(champObjectif.value);
    const joursRestants = objectif - jours;

    if (joursRestants > 0) {
        message.textContent = `${jours} jour(s) 🔥 Plus que ${joursRestants} avant ton objectif !`;
    } else {
        message.textContent = `${jours} jours : objectif atteint 🏆`;
    }

    affichageRecord.textContent = `Record : ${record} jour(s)`;
    if (nouveauRecord) {
        affichageRecord.textContent += " 🎉 Nouveau record !";
    }
});

boutonReset.addEventListener("click", () => {
    jours = 0;
    message.textContent = "Pas grave, on repart ! 💪";
});
