// Function to update Other Allowances output
  function updateAllowances() {
    var otherAllowancesInput = document.getElementById('otherAllowances');
    var otherAllowancesOutput = document.getElementById('otherAllowancesOutput');
    var selectedOtherAllowances = parseFloat(otherAllowancesInput.value);

    // Check if it's a valid number
    if (!isNaN(selectedOtherAllowances)) {
      otherAllowancesOutput.textContent = selectedOtherAllowances.toFixed(2);
    } else {
      // Handle the case when it's not a valid number (NaN)
      otherAllowancesOutput.textContent = "0";
    }
  }

  // Add event listener to Other Allowances input
  document.getElementById('otherAllowances').addEventListener('input', updateAllowances);