// Calculate HRA output based on selected HRA percentage and basic pay
document.addEventListener('DOMContentLoaded', function () {
  var hraDropdown = document.getElementById('hraDropdown');
  var hraOutput = document.getElementById('hraOutput');

  // Update HRA output when HRA dropdown value changes
  hraDropdown.addEventListener('change', function () {
    var selectedHRA = parseFloat(hraDropdown.value) / 100;
    var basicPay = parseFloat(document.getElementById('basicPayOutput').textContent);
    var calculatedHRA = basicPay * selectedHRA;
    hraOutput.textContent = calculatedHRA.toFixed(2);
  });
});
