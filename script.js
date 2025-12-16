// Conversion factors
const KM_TO_MI_FACTOR = 0.621371;
const MI_TO_KM_FACTOR = 1.60934;

document.getElementById('convertButton').addEventListener('click', performConversion);

function performConversion() {
    // 1. Get input elements and values
    const inputValue = document.getElementById('inputValue').value;
    const direction = document.getElementById('conversionDirection').value;
    const outputElement = document.getElementById('outputResult');

    // Basic validation
    if (!inputValue || isNaN(inputValue) || inputValue < 0) {
        outputElement.textContent = "Please enter a valid positive number.";
        return;
    }

    const numberValue = parseFloat(inputValue);
    let result;
    let originalUnit;
    let targetUnit;

    // 2. Perform the conversion based on direction
    if (direction === 'kmToMi') {
        result = numberValue * KM_TO_MI_FACTOR;
        originalUnit = 'km';
        targetUnit = 'mi';
    } else { // miToKm
        result = numberValue * MI_TO_KM_FACTOR;
        originalUnit = 'mi';
        targetUnit = 'km';
    }

    // 3. Display the output (formatted to 3 decimal places)
    outputElement.innerHTML = `${numberValue.toFixed(3)} ${originalUnit} is equal to <strong>${result.toFixed(3)} ${targetUnit}</strong>.`;
}
