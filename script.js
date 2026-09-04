"use strict"

//all these variables will be used later

const numberOfRounds = document.querySelector("#number-of-rounds")

const errorMessage = document.querySelector("#error-message")

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

const playerScore = document.querySelector("#player-score")
const computerScore = document.querySelector("#computer-score")
const finalScore = document.querySelector("#final-score")

const scoreBlock = document.querySelector(".score-block")

const submitButton = document.querySelector("#submit-rounds")
const form = document.querySelector("form")

const picks = document.querySelector(".picks")

const roundsBlock = document.querySelector(".rounds-block")



function validateRounds(rounds) {
    const minValue = Number(numberOfRounds.getAttribute("min"))
    const maxValue = Number(numberOfRounds.getAttribute("max"))
    if (Number(rounds) >= minValue && Number(rounds) <= maxValue) {
        return true
    }
    return false
}

function getNumberOfRounds() {
    if (!validateRounds(numberOfRounds.value)) {
        errorMessage.hidden = false
        errorMessage.textContent = "Invalid input (must be between 1 and 10)"
        numberOfRounds.value = ""
        numberOfRounds.focus()
        return null
    } else {
        errorMessage.hidden = true
        toggleState()
        return Number(numberOfRounds.value)
    }
}

function getComputerPick() {
    const picks = ["rock", "paper", "scissors"]
    const i = Math.floor(Math.random() * 3)
    return picks[i]
}


function toggleState() {
    roundsBlock.classList.toggle("hide")
    picks.classList.toggle("hide")
    scoreBlock.classList.toggle("hide")
}

let numOfRounds = 0
let currentPlayerPick = null
let currentComputerPick = getComputerPick()

submitButton.addEventListener("click", () => {
    let temp = getNumberOfRounds()
    if (temp) {
        numOfRounds = temp
    }
    console.log(numOfRounds)
    
})

picks.addEventListener("click", (event) => {
    currentPlayerPick = event.target.id
    
})

