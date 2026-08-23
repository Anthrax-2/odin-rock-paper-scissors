"use strict"

const numberOfRounds = document.querySelector("#number-of-rounds")

const errorMessage = document.querySelector("#error-message")

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

const playerScore = document.querySelector("#player-score")
const computerScore = document.querySelector("#computer-score")
const finalScore = document.querySelector("#final-score")

const submitButton = document.querySelector("#submit-rounds")
const form = document.querySelector("form")

const picks = document.querySelector(".picks")


function validateRounds(rounds) {

function getNumberOfRounds() {
    if (!validateRounds(numberOfRounds.value)) {
        errorMessage.hidden = false
        errorMessage.textContent = "Invalid input (must be between 1 and 10)"
        numberOfRounds.value = ""
        numberOfRounds.focus()
        return null
    }
    else {
        errorMessage.hidden = true
        return Number(numberOfRounds.value)
    }
}

submitButton.addEventListener("click", () => {
    const rounds = getNumberOfRounds()
    
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const rounds = getNumberOfRounds()
})


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
    }
    else {
        errorMessage.hidden = true
        return Number(numberOfRounds.value)
    }
}

submitButton.addEventListener("click", () => {
    const rounds = getNumberOfRounds()
    
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const rounds = getNumberOfRounds()
})


