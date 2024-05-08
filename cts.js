function calculate() {
    var tire1Width = parseInt(document.getElementById("tire1Width").value);
    var tire1Height = parseInt(document.getElementById("tire1Height").value);
    var tire1Rim = parseInt(document.getElementById("tire1Rim").value);

    var tire2Width = parseInt(document.getElementById("tire2Width").value);
    var tire2Height = parseInt(document.getElementById("tire2Height").value);
    var tire2Rim = parseInt(document.getElementById("tire2Rim").value);

    var tire1Diameter = calculateDiameter(tire1Width, tire1Height, tire1Rim);
    var tire2Diameter = calculateDiameter(tire2Width, tire2Height, tire2Rim);

    var percentageDifference = ((tire2Diameter - tire1Diameter) / tire1Diameter) * 100;

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<p>Tire 1 Diameter: " + tire1Diameter.toFixed(2) + " inches</p>" +
                               "<p>Tire 2 Diameter: " + tire2Diameter.toFixed(2) + " inches</p>" +
                               "<p>Percentage Difference: " + percentageDifference.toFixed(2) + "%</p>";
}

function calculateDiameter(width, aspectRatio, rim) {
    // Tire diameter calculation in inches
    var tireHeightInches = (width * aspectRatio / 2540) * 2; // Multiplying by 2 for two sidewalls
    return tireHeightInches + rim * 25.4; // Converting rim size to millimeters
}
