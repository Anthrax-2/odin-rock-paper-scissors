"use strict"

const numberOfRounds = document.querySelector("#number-of-rounds")

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("scissors")

const playerScore = document.querySelector("#player-score")
const computerScore = document.querySelector("#computer-score")
const finalScore = document.querySelector("final-score")


function validateRounds(rounds) {
    const minValue = numberOfRounds.getAttribute("min")
    const maxValue = numberOfRounds.getAttribute("max")
    if (rounds > minValue && rounds < maxValue) {
        return true
    }
    return false
}