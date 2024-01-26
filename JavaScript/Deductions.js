// Function to update Deductions output
  function updateDeductionsOutput() {
    var DeductionsInput = document.getElementById('deductions');
    var DeductionsOutput = document.getElementById('DeductionsOutput');
    var selectedDeductions = parseFloat(DeductionsInput.value);

    // Check if it's a valid number
    if (!isNaN(selectedDeductions)) {
      DeductionsOutput.textContent = selectedDeductions.toFixed(2);
    } else {
      // Handle the case when it's not a valid number (NaN)
      DeductionsOutput.textContent = "0";
    }
  }

  // Add event listener to Deductions input
  document.getElementById('deductions').addEventListener('input', updateDeductionsOutput);