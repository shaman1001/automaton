window.onload = function() {
  const form = document.getElementById('tire-size-form');
  const resultsDiv = document.getElementById('results');
  const calculateButton = document.getElementById('calculate-button');

  function populateDropdowns() {
    // ... (code to populate dropdown menus remains the same) ...
  }

  populateDropdowns(); // Call the function to populate dropdowns on load

  // Remove event listener for form submission (since we have a separate button)
  // form.addEventListener('submit', function(event) {
  //   event.preventDefault(); // Prevent default form submission (not needed here)
  //   // ... (previous form submission code) ...
  // });

  calculateButton.addEventListener('click', function() {
    // Get values from dropdown menus
    const tireWidth1 = parseFloat(document.getElementById('tire-width-1').value);
    const aspectRatio1 = parseFloat(document.getElementById('aspect-ratio-1').value);
    const rimSize1 = parseFloat(document.getElementById('rim-size-1').value);

    const tireWidth2 = parseFloat(document.getElementById('tire-width-2').value);
    const aspectRatio2 = parseFloat(document.getElementById('aspect-ratio-2').value);
    const rimSize2 = parseFloat(document.getElementById('rim-size-2').value);

    // ... (code to calculate diameters and display results remains the same) ...
  });
};
