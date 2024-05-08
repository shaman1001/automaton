function calculate() {
    var tire1Width = parseInt(document.getElementById("tire1Width").value);
    var tire1AspectRatio = parseInt(document.getElementById("tire1AspectRatio").value);
    var tire1Rim = parseInt(document.getElementById("tire1Rim").value);

    var tire2Width = parseInt(document.getElementById("tire2Width").value);
    var tire2AspectRatio = parseInt(document.getElementById("tire2AspectRatio").value);
    var tire2Rim = parseInt(document.getElementById("tire2Rim").value);

    var tire1Diameter = calculateDiameter(tire1Width, tire1AspectRatio, tire1Rim);
    var tire2Diameter = calculateDiameter(tire2Width, tire2AspectRatio, tire2Rim);

    var percentageDifference = ((tire2Diameter - tire1Diameter) / tire1Diameter) * 100;

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<p>Tire 1 Diameter: " + tire1Diameter.toFixed(2) + " inches</p>" +
                               "<p>Tire 2 Diameter: " + tire2Diameter.toFixed(2) + " inches</p>" +
                               "<p>Percentage Difference: " + percentageDifference.toFixed(2) + "%</p>";
}

function calculateDiameter(width, aspectRatio, rim) {
    // Tire diameter calculation in inches
    var sidewallHeight = (width * aspectRatio / 100) / 25.4; // Convert aspect ratio to fraction and divide by 25.4 to convert mm to inches
    return sidewallHeight * 2 + rim; // Multiply by 2 for two sidewalls
}
