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

    // (code to populate dropdown menus remains the same)

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get values from dropdown menus
      const tireWidth1 = parseFloat(document.getElementById('tire-width-1').value);
      const aspectRatio1 = parseFloat(document.getElementById('aspect-ratio-1').value);
      const rimSize1 = parseFloat(document.getElementById('rim-size-1').value);

      const tireWidth2 = parseFloat(document.getElementById('tire-width-2').value);
      const aspectRatio2 = parseFloat(document.getElementById('aspect-ratio-2').value);
      const rimSize2 = parseFloat(document.getElementById('rim-size-2').value);

      // Calculate diameters (assuming sidewall height calculation remains the same)
      const sidewallHeight1 = aspectRatio1 / 100 * tireWidth1;
      const diameter1 = (sidewallHeight1 * 2) / 25.4 + rimSize1;

      const sidewallHeight2 = aspectRatio2 / 100 * tireWidth2;
      const diameter2 = (sidewallHeight2 * 2) / 25.4 + rimSize2;

      // Calculate and display the difference or percentage change
      const difference = diameter1 - diameter2;
      const percentageChange = (difference / diameter1) * 100;

      let message;
      if (difference > 0) {
        message = `Tire 1 is ${Math.abs(difference).toFixed(2)} mm larger than Tire 2.`;
      } else if (difference < 0) {
        message = `Tire 2 is ${Math.abs(difference).toFixed(2)} mm larger than Tire 1.`;
      } else {
        message = 'Tire diameters are the same.';
      }

      if (percentageChange > 0) {
        message += ` (A ${Math.abs(percentageChange).toFixed(2)}% increase)`;
      } else if (percentageChange < 0) {
        message += ` (A ${Math.abs(percentageChange).toFixed(2)}% decrease)`;
      }

      resultsDiv.textContent = message;
    });
  }

  populateDropdowns(); // Call the function to populate dropdowns on load
};
