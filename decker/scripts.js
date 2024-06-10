// scripts.js
function calculateDeck() {
    // Get the input values
    const width = parseFloat(document.getElementById('width').value);
    const length = parseFloat(document.getElementById('length').value);

    if (isNaN(width) || isNaN(length) || width <= 0 || length <= 0) {
        alert("Please enter valid positive numbers for width and length.");
        return;
    }

    // Calculate the deck size in square meters
    const deckSize = width * length;
    document.getElementById('deckSize').textContent = `${deckSize.toFixed(2)} square meters`;

    // Provide a verbal summary
    const deckSummary = `The deck is ${width.toFixed(2)} meters wide and ${length.toFixed(2)} meters long.`;
    document.getElementById('deckSummary').textContent = deckSummary;

    // Visualize the deck structure
    visualizeDeck(width, length);
}

function visualizeDeck(width, length) {
    const canvas = document.getElementById('deckCanvas');
    const context = canvas.getContext('2d');

    // Clear previous drawings
    context.clearRect(0, 0, canvas.width, canvas.height);

    const padding = 20;
    const canvasWidth = canvas.width - padding * 2;
    const canvasHeight = canvas.height - padding * 2;

    // Calculate scale factors to fit the deck dimensions within the canvas
    const scaleWidth = canvasWidth / width;
    const scaleLength = canvasHeight / length;
    const scale = Math.min(scaleWidth, scaleLength);

    // Adjust the canvas size
    const scaledWidth = width * scale;
    const scaledLength = length * scale;

    // Draw the deck rectangle
    context.strokeStyle = '#000';
    context.strokeRect(padding, padding, scaledWidth, scaledLength);

    // Draw the framing structure
    const joistSpacing = 0.5; // Joist spacing in meters (typical standard)
    const beamSpacing = 2.0; // Beam spacing in meters (typical standard)

    context.strokeStyle = '#00f';

    // Draw joists
    for (let i = 0; i <= width; i += joistSpacing) {
        context.beginPath();
        context.moveTo(padding + i * scale, padding);
        context.lineTo(padding + i * scale, padding + scaledLength);
        context.stroke();
    }

    // Draw beams
    for (let i = 0; i <= length; i += beamSpacing) {
        context.beginPath();
        context.moveTo(padding, padding + i * scale);
        context.lineTo(padding + scaledWidth, padding + i * scale);
        context.stroke();
    }
}
