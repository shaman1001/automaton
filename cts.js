function calculate() {
    var tire1Width = parseFloat(document.getElementById("tire1Width").value);
    var tire1Height = parseFloat(document.getElementById("tire1Height").value);
    var tire1Rim = parseFloat(document.getElementById("tire1Rim").value);

    var tire2Width = parseFloat(document.getElementById("tire2Width").value);
    var tire2Height = parseFloat(document.getElementById("tire2Height").value);
    var tire2Rim = parseFloat(document.getElementById("tire2Rim").value);

    var tire1Diameter = calculateDiameter(tire1Width, tire1Height, tire1Rim);
    var tire2Diameter = calculateDiameter(tire2Width, tire2Height, tire2Rim);

    var percentageDifference = ((tire2Diameter - tire1Diameter) / tire1Diameter) * 100;

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Tire 1 Diameter: " + tire1Diameter.toFixed(2) + " inches<br>" +
                               "Tire 2 Diameter: " + tire2Diameter.toFixed(2) + " inches<br>" +
                               "Percentage Difference: " + percentageDifference.toFixed(2) + "%";
}

function calculateDiameter(width, height, rim) {
    // Tire diameter calculation in inches
    var tireHeightInches = (width * height / 2540);
    return tireHeightInches + rim * 25.4;
}
