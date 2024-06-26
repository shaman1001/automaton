function calculate() {
    // Get selected tire dimensions
    var tire1Width = parseInt(document.getElementById("tire1Width").value);
    var tire1AspectRatio = parseInt(document.getElementById("tire1Height").value);
    var tire1Rim = parseInt(document.getElementById("tire1Rim").value);

    var tire2Width = parseInt(document.getElementById("tire2Width").value);
    var tire2AspectRatio = parseInt(document.getElementById("tire2Height").value);
    var tire2Rim = parseInt(document.getElementById("tire2Rim").value);

    // Calculate tire diameters
    var tire1Diameter = calculateDiameter(tire1Width, tire1AspectRatio, tire1Rim);
    var tire2Diameter = calculateDiameter(tire2Width, tire2AspectRatio, tire2Rim);

    // Update result display
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<p>Tire 1 Diameter: " + tire1Diameter.toFixed(2) + " inches</p>" +
                               "<p>Tire 2 Diameter: " + tire2Diameter.toFixed(2) + " inches</p>";

    // Update tire visualizations
    updateTireVisualizations(tire1Width, tire1AspectRatio, tire1Rim, tire2Width, tire2AspectRatio, tire2Rim);
}

function calculateDiameter(width, aspectRatio, rim) {
    // Tire diameter calculation in inches
    var sidewallHeight = (width * aspectRatio / 100) / 25.4; // Convert aspect ratio to fraction and divide by 25.4 to convert mm to inches
    return sidewallHeight * 2 + rim; // Multiply by 2 for two sidewalls
}

function updateTireVisualizations(tire1Width, tire1AspectRatio, tire1Rim, tire2Width, tire2AspectRatio, tire2Rim) {
    var tireVisualizationsElement = document.getElementById("tireVisualizations");
    tireVisualizationsElement.innerHTML = ""; // Clear previous visualizations

    var tire1Visualization = createTireVisualization(tire1Width, tire1AspectRatio, tire1Rim, "Tire 1");
    var tire2Visualization = createTireVisualization(tire2Width, tire2AspectRatio, tire2Rim, "Tire 2");

    tireVisualizationsElement.appendChild(tire1Visualization);
    tireVisualizationsElement.appendChild(tire2Visualization);
}

function createTireVisualization(width, aspectRatio, rim, label) {
    var tireVisualization = document.createElement("div");
    tireVisualization.className = "tire-visualization";

    // Create outer tire element
    var outerTire = document.createElement("div");
    outerTire.className = "outer-tire";
    outerTire.style.width = width + "px";
    outerTire.style.height = width * aspectRatio / 100 + "px";
    outerTire.style.border = "2px solid black";
    outerTire.style.borderRadius = "50%";
    outerTire.style.marginRight = "20px";
    tireVisualization.appendChild(outerTire);

    // Create inner tire element
    var innerTire = document.createElement("div");
    innerTire.className = "inner-tire";
    innerTire.style.width = (width - 10) + "px"; // Adjust size to create tread
    innerTire.style.height = (width * aspectRatio / 100 - 10) + "px"; // Adjust size to create tread
    innerTire.style.backgroundColor = "black";
    innerTire.style.borderRadius = "50%";
    outerTire.appendChild(innerTire);

    // Create label for the tire visualization
    var tireLabel = document.createElement("div");
    tireLabel.textContent = label;
    tireLabel.style.textAlign = "center";
    tireLabel.style.marginTop = "10px"; // Adjust spacing
    tireVisualization.appendChild(tireLabel);

    return tireVisualization;
}
