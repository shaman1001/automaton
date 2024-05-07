window.onload = function() {
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

    // Aspect ratio options (35 to 85 in steps of 5)
    for (let ratio = 35; ratio <= 85; ratio += 5) {
      const ratioOption1 = document.createElement('option');
      ratioOption1.value = ratio;
      ratioOption1.text = `${ratio}%`;
      aspectRatioSelect1.appendChild(ratioOption1);
      const ratioOption2 = document.createElement('option');
      ratioOption2.value = ratio;
      ratioOption2.text = `${ratio}%`;
      aspectRatioSelect2.appendChild(ratioOption2);
    }

    // Rim size options (13 to 22)
    for (let rim = 13; rim <= 22; rim++) {
      const rimOption1 = document.createElement('option');
      rimOption1.value = rim;
      rimOption1.text = `${rim} inches`;
      rimSizeSelect1.appendChild(rimOption1);
      const rimOption2 = document.createElement('option');
      rimOption2.value = rim;
      rimOption2.text = `${rim} inches`;
      rimSizeSelect2.appendChild(rimOption2);
    }
  }

  populateDropdowns(); // Call the function to populate dropdowns on load

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from dropdown menus
    const tireWidth1 = parseFloat(document.getElementById('tire-width-1').value);
    const aspectRatio1 = parseFloat(document.getElementById('aspect-ratio-1').value);
    const rimSize1 = parseFloat(document.getElementById('rim-size-1').value);

    const tireWidth2 = parseFloat(document.getElementById('tire-width-2').value);
    const aspectRatio2 = parseFloat(document.getElementById('aspect-ratio-2').value);
    const rimSize2 = parseFloat(document.getElementById('rim-size-2').value);

    // Calculate diameters
    const sidewallHeight1 = aspectRatio1 / 100 * tireWidth1;
    const diameter1 = (sidewallHeight1 * 2) / 25.4 + rimSize1;

    const sidewallHeight2 = aspectRatio2 / 100 * tireWidth2;
    const diameter2 = (sidewallHeight2 * 2) / 25.4 + rimSize2;

    // Calculate difference and percentage change
    const difference = diameter1 - diameter2;
    const percentageChange = (difference / diameter1) * 100;

    // Construct result message
    let message;
    if (difference > 0) {
      message = `Tire 1 is ${Math.abs(difference).toFixed(2)} mm larger than Tire 2.`;
    } else if (difference < 0) {
      message = `Tire 2 is ${Math.abs(difference).toFixed(2
