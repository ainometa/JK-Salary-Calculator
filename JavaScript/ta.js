// Calculate Transport Allowance output based on selected TA and DA values
document.addEventListener('DOMContentLoaded', function () {
  var taDropdown = document.getElementById('taDropdown');
  var taOutput = document.getElementById('taOutput');
  var daDropdown = document.getElementById('daDropdown');

  // Update TA output when TA or DA dropdown values change
  function updateTAOutput() {
    var selectedTA = parseFloat(taDropdown.value);
    var selectedDA = parseFloat(daDropdown.value) / 100;
    var calculatedTA = selectedTA + (selectedTA * selectedDA);
    taOutput.textContent = calculatedTA.toFixed(2);
  }

  // Update TA output when TA or DA dropdown values change
  taDropdown.addEventListener('change', updateTAOutput);
  daDropdown.addEventListener('change', updateTAOutput);
});
