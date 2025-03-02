function convertTemperature() {
    let temp = document.getElementById('temperature').value;
    let unit = document.getElementById('unit').value;
    let result = document.getElementById('result');

    if (temp === "") {
        result.textContent = "Please enter a temperature.";
        return;
    }

    temp = parseFloat(temp);
    let convertedTemp;

    if (unit === "celsius") {
        convertedTemp = (temp * 9/5) + 32;
        result.textContent = `${temp}°C = ${convertedTemp.toFixed(2)}°F`;
    } else {
        convertedTemp = (temp - 32) * 5/9;
        result.textContent = `${temp}°F = ${convertedTemp.toFixed(2)}°C`;
    }
}
