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

    // Calculate and provide the frame structure description
    const frameDescription = calculateFrameStructure(width, length);
    document.getElementById('frameStructure').textContent = frameDescription;

    // Visualize the deck structure
    visualizeDeck(width, length);
}

function calculateFrameStructure(width, length) {
    // Standard spacing for joists and beams
    const joistSpacing = 0.5; // meters
    const beamSpacing = 2.0; // meters

    // Calculate number of joists and beams
    const numJoists = Math.ceil(width / joistSpacing) + 1;
    const numBeams = Math.ceil(length / beamSpacing) + 1;

    // Calculate positions of joists and beams
    const joistPositions = Array.from({ length: numJoists }, (_, i) => (i * joistSpacing).toFixed(2));
    const beamPositions = Array.from({ length: numBeams }, (_, i) => (i * beamSpacing).toFixed(2));

    // Calculate number and positions of support posts
    const supportPostSpacing = 2.0; // meters
    const numPostsWidth = Math.ceil(width / supportPostSpacing) + 1;
    const numPostsLength = Math.ceil(length / supportPostSpacing) + 1;
    const postPositions = [];

    for (let i = 0; i < numPostsLength; i++) {
        for (let j = 0; j < numPostsWidth; j++) {
            postPositions.push([i * supportPostSpacing, j * supportPostSpacing]);
        }
    }

    // Create frame structure description
    let frameDescription = `The frame consists of ${numJoists} joists spaced ${joistSpacing} meters apart, `;
    frameDescription += `and ${numBeams} beams spaced ${beamSpacing} meters apart. `;
    frameDescription += `There are ${numPostsWidth * numPostsLength} support posts placed at the following positions (in meters): `;
    frameDescription += postPositions.map(pos => `(${pos[0].toFixed(2)}, ${pos[1].toFixed(2)})`).join(', ') + '.';

    return frameDescription;
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

    // Draw support posts
    const supportPostSpacing = 2.0; // meters
    const numPostsWidth = Math.ceil(width / supportPostSpacing) + 1;
    const numPostsLength = Math.ceil(length / supportPostSpacing) + 1;

    context.fillStyle = '#f00';

    for (let i = 0; i < numPostsLength; i++) {
        for (let j = 0; j < numPostsWidth; j++) {
            context.beginPath();
            const x = padding + j * supportPostSpacing * scale;
            const y = padding + i * supportPostSpacing * scale;
            context.arc(x, y, 5, 0, 2 * Math.PI);
            context.fill();
        }
    }
}
