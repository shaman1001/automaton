const form = document.getElementById('tire-size-form');
const resultsDiv = document.getElementById('results');

function populateDropdowns() {
  const tireWidthSelect1 = document.getElementById('tire-width-1');
  const aspectRatioSelect1 = document.getElementById('aspect-ratio-1');
  const rimSizeSelect1 = document.getElementById('rim-size-1');

  const tireWidthSelect2 = document.getElementById('tire-width-2');
  const aspectRatioSelect2 = document.getElementById('aspect-ratio-2');
  const rimSizeSelect2 = document.getElementById('rim-size-2');

  // Tire width options (205 to 330 in steps of 5)
  for (let width = 205; width <= 330; width += 5) {
    const widthOption1 = document.createElement('option');
    widthOption1.value = width;
    widthOption1.text = `${width} mm`;
    tireWidthSelect1.appendChild(widthOption1);

    const widthOption2 = document.createElement('option');
    widthOption2.value = width;
    widthOption2.text = `${width} mm`;
    tireWidthSelect2.appendChild(widthOption2);
  }

  // Aspect ratio options (40 to 85 in steps of 5)
  for (let ratio = 40;
