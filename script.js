"use strict"

const validPicks = ["rock", "paper", "scissors"]

let playerScore = 0
let computerScore = 0

function playRound(playerPick, computerPick) {
    if (playerPick === "scissors") {
        if (computerPick === "paper") {
            playerScore ++;
            return `Player chose scissors. Computer chose paper. Player wins.\n`
        } else if (computerPick === "rock") {
            computerScore ++;
            return `Player chose scissors. Computer chose rock. Computer wins.\n`
        } else {
            return `Player chose scissors. Computer chose scissors. Draw.\n`
        }
    } else if (playerPick === "rock") {
        if (computerPick === "scissors") {
            playerScore ++
            return `Player chose rock. Computer chose scissors. Player wins.\n`
        } else if (computerPick === "paper") {
            computerScore ++
            return `Player chose rock. Computer chose paper. Computer wins.\n`
        } else {
            return `Player chose rock. Computer chose rock. Draw.\n`
        }
    } else {
        if (computerPick === "rock") {
            playerScore ++
            return `Player chose paper. Computer chose rock. Player wins.\n`
        } else if (computerPick === "scissors") {
            computerScore ++
            return `Player chose paper. Computer chose scissors. Computer wins.\n`
        } else {
            return `Player chose paper. Computer chose paper. Draw.\n`
        }
    }
}

function validatePick(pick) {
    if (pick) {
        if (validPicks.includes(pick.toLowerCase())) {
            return true
        }
        return false
    }
    return false
}

function getPlayerPick() {
    let pick = prompt("Choose one of these (Rock, Paper, Scissors):")
    if (validatePick(pick)) {
        return pick.toLowerCase()
    }
    return null
}

function getComputerPick() {
    let i = Math.floor(Math.random() * validPicks.length)
    return validPicks[i]
}
