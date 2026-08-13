const validPicks = ["rock", "paper", "scissors"];

function validatePick(pick) {
    if (pick) {
        if (validPicks.includes(pick.toLowerCase())) {
            return true;
        }
        return false;
    }
    return false;
}

function getPlayerPick() {
    let pick = prompt("Choose one of these (Rock, Paper, Scissors):");
    if (validatePick(pick)) {
        return pick.toLowerCase();
    }
    return null;
}

function getComputerPick() {
    let i = Math.floor(Math.random() * validPicks.length);
    return validPicks[i];
}

