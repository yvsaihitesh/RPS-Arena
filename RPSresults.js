const homepage = document.getElementsByClassName("homepage")[0];
const tablebody = document.getElementById("summary");
const playerChoices = JSON.parse(sessionStorage.getItem("playerChoices")) || [];
const botChoices = JSON.parse(sessionStorage.getItem("botChoices")) || [];
const playerScores = JSON.parse(sessionStorage.getItem("playerScores")) || [];
const botScores = JSON.parse(sessionStorage.getItem("botScores")) || [];

playerChoices.forEach((choice,i) => {
    const row = document.createElement("tr");
    const playercol = document.createElement("td");
    const botcol = document.createElement("td");
    const playerscore = document.createElement("td");
    const botscore = document.createElement("td");
    playercol.textContent=choice;
    botcol.textContent=botChoices[i];
    playerscore.textContent=playerScores[i];
    botscore.textContent=botScores[i];
    row.appendChild(playercol);
    row.appendChild(botcol);
    row.appendChild(playerscore);
    row.appendChild(botscore);
    tablebody.appendChild(row);

});
homepage.addEventListener("click", () => {
    window.location.href="RPS_Arena.html";
});