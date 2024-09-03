const userInput = document.getElementById("input-number");
const convertButton = document.getElementById("button");
const generateLengthCentimeter = document.getElementById("generate-length-cm");
const generateLengthMeter = document.getElementById("generate-length-m");
const generateVolume = document.getElementById("generate-volume");
const generateMass = document.getElementById("generate-mass");

const inch = 0.3937; // 1 cm to inch
const centimeter = 2.54; // 1 inch to cm
const foot = 3.281; // 1 meter to feet
const meter = 0.3048; // 1 foot to meter
const gallon = 0.2199; // 1 liter to gallon
const litre = 4.54609; // 1 gallon to litres
const pound = 2.204; // 1 kg to pounds
const kilogram = 0.4535924; // 1 pound to kilograms

function convertToUnits(coef) {
    return (Number(userInput.value) * coef).toFixed(2);
}

function makeConversion() {
    if (userInput.value > 0) {
        generateLengthCentimeter.innerText = `
            ${userInput.value} cm = ${convertToUnits(inch)} inch | ${
            userInput.value
        } inch = ${convertToUnits(centimeter)} cm
        `;
        generateLengthMeter.innerText = `
            ${userInput.value} m = ${convertToUnits(foot)} feet | ${
            userInput.value
        } feet = ${convertToUnits(meter)} m
        `;
        generateVolume.innerText = `
            ${userInput.value} liters = ${convertToUnits(gallon)} gallons | ${
            userInput.value
        } gallons = ${convertToUnits(litre)} liters
        `;
        generateMass.innerText = `
            ${userInput.value} kg = ${convertToUnits(pound)} lbs | ${
            userInput.value
        } lbs = ${convertToUnits(kilogram)} kg
        `;
    } else {
        generateLengthCentimeter.innerText = " ";
        generateLengthMeter.innerText = " ";
        generateVolume.innerText = " ";
        generateMass.innerText = " ";
    }
}

convertButton.addEventListener("click", () => {
    makeConversion();
});

userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        makeConversion();
    }
});