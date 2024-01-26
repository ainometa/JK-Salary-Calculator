// Calculate CCA output based on selected CCA value
document.addEventListener('DOMContentLoaded', function () {
  var ccaDropdown = document.getElementById('ccaDropdown');
  var ccaOutput = document.getElementById('ccaOutput');

  // Update CCA output when CCA dropdown value changes
  ccaDropdown.addEventListener('change', function () {
    var selectedCCA = parseFloat(ccaDropdown.value);
    ccaOutput.textContent = selectedCCA.toFixed(2);
  });
});
