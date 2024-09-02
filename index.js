const userInput = document.getElementById("input-number");
const convertButton = document.getElementById("button");
const generateLengthCentimeter = document.getElementById("generate-length-cm");
const generateLengthMeter = document.getElementById("generate-length-m");
const generateVolume = document.getElementById("generate-volume");
const generateMass = document.getElementById("generate-mass");

function convertToInches() {
    return (Number(userInput.value).toFixed(2) * 0.3937).toFixed(2);
}

function convertToCentimeters() {
    return (Number(userInput.value).toFixed(2) * 2.54).toFixed(2);
}

function convertToFeet() {
    return (Number(userInput.value).toFixed(2) * 3.281).toFixed(2);
}

function convertToMeters() {
    return (Number(userInput.value).toFixed(2) * 0.3048).toFixed(2);
}

function convertToGallons() {
    return (Number(userInput.value).toFixed(2) * 0.2199).toFixed(2);
}

function convertToLiters() {
    return (Number(userInput.value).toFixed(2) * 4.54609).toFixed(2);
}

function convertToPounds() {
    return (Number(userInput.value).toFixed(2) * 2.204).toFixed(2);
}

function convertToKilograms() {
    return (Number(userInput.value).toFixed(2) * 0.4535924).toFixed(2);
}

function makeConversion() {
    if (userInput.value > 0) {
        generateLengthCentimeter.innerText = `
            ${userInput.value} cm = ${convertToInches()} inch | ${userInput.value} inch = ${convertToCentimeters()} cm
        `;

        generateLengthMeter.innerText = `
            ${userInput.value} m = ${convertToFeet()} feet | ${userInput.value} feet = ${convertToMeters()} m
        `;

        generateVolume.innerText = `
            ${userInput.value} liters = ${convertToGallons()} gallons | ${userInput.value} gallons = ${convertToLiters()} liters
        `;

        generateMass.innerText = `
            ${userInput.value} kg = ${convertToPounds()} lbs | ${userInput.value} lbs = ${convertToKilograms()} kg
        `;
    }
    else {
        generateLengthCentimeter.innerText = " ";
        generateLengthMeter.innerText = " ";
        generateVolume.innerText = " ";
        generateMass.innerText = " ";
    }
}

convertButton.addEventListener("click", () => {
    makeConversion();
});

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        makeConversion();
    }
});