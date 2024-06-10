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

    // Visualize the deck structure
    visualizeDeck(width, length);
}

function visualizeDeck(width, length) {
    const canvas = document.getElementById('deckCanvas');
    const context = canvas.getContext('2d');

    // Clear previous drawings
    context.clearRect(0, 0, canvas.width, canvas.height);

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate scale factors to fit the deck dimensions within the canvas
    const scaleWidth = canvasWidth / width;
    const scaleLength = canvasHeight / length;
    const scale = Math.min(scaleWidth, scaleLength);

    // Adjust the canvas size
    const scaledWidth = width * scale;
    const scaledLength = length * scale;

    // Draw the deck rectangle
    context.strokeStyle = '#000';
    context.strokeRect((canvasWidth - scaledWidth) / 2, (canvasHeight - scaledLength) / 2, scaledWidth, scaledLength);

    // Draw the framing structure
    const joistSpacing = 0.5; // Joist spacing in meters (typical standard)
    const beamSpacing = 2.0; // Beam spacing in meters (typical standard)

    context.strokeStyle = '#00f';

    // Draw joists
    for (let i = 0; i <= width; i += joistSpacing) {
        context.beginPath();
        context.moveTo((canvasWidth - scaledWidth) / 2 + i * scale, (canvasHeight - scaledLength) / 2);
        context.lineTo((canvasWidth - scaledWidth) / 2 + i * scale, (canvasHeight - scaledLength) / 2 + scaledLength);
        context.stroke();
    }

    // Draw beams
    for (let i = 0; i <= length; i += beamSpacing) {
        context.beginPath();
        context.moveTo((canvasWidth - scaledWidth) / 2, (canvasHeight - scaledLength) / 2 + i * scale);
        context.lineTo((canvasWidth - scaledWidth) / 2 + scaledWidth, (canvasHeight - scaledLength) / 2 + i * scale);
        context.stroke();
    }
}
