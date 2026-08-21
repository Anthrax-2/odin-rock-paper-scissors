"use strict"

const validPicks = ["rock", "paper", "scissors"]

function playGame(numberOfRounds = 3) {

    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < numberOfRounds; i++) {
        let [message, winner] = playRound(getPlayerPick(), getComputerPick())
        if (winner === `player`) {
            playerScore++
        }
        else if (winner === `computer`) {
            computerScore++
        }
        console.log(message)
    }
    if (playerScore > computerScore) {
        return `Final score:\nPlayer: ${playerScore}\nComputer: ${computerScore}\nPlayer wins.`
    } else if (playerScore < computerScore) {
        return `Final score:\nPlayer: ${playerScore}\nComputer: ${computerScore}\nComputer wins.`
    } else {
        return `Final score:\nPlayer: ${playerScore}\nComputer: ${computerScore}\nDraw.`
    }
}

function playRound(playerPick, computerPick) {
    if (playerPick === "scissors") {
        if (computerPick === "paper") {
            return [`Player chose scissors. Computer chose paper. Player wins round.\n`, `player`]
        } else if (computerPick === "rock") {
            return [`Player chose scissors. Computer chose rock. Computer wins round.\n`, `computer`]
        } else {
            return [`Player chose scissors. Computer chose scissors. Draw.\n`, `draw`]
        }
    } else if (playerPick === "rock") {
        if (computerPick === "scissors") {
            return [`Player chose rock. Computer chose scissors. Player wins round.\n`, `player`]
        } else if (computerPick === "paper") {
            
            return [`Player chose rock. Computer chose paper. Computer wins round.\n`, `computer`]
        } else {
            return [`Player chose rock. Computer chose rock. Draw.\n`, `draw`]
        }
    } else {
        if (computerPick === "rock") {
           
            return [`Player chose paper. Computer chose rock. Player wins round.\n`, `player`]
        } else if (computerPick === "scissors") {
    
            return [`Player chose paper. Computer chose scissors. Computer wins round.\n`, `computer`]
        } else {
            return [`Player chose paper. Computer chose paper. Draw.\n`, `draw`]
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
    alert("Invalid input.")
    return getPlayerPick()
}

function getComputerPick() {
    let i = Math.floor(Math.random() * validPicks.length)
    return validPicks[i]
}

console.log(playGame())



