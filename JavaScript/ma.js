// Calculate MA output based on selected MA value
document.addEventListener('DOMContentLoaded', function () {
  var maDropdown = document.getElementById('maDropdown');
  var maOutput = document.getElementById('maOutput');

  // Update MA output when MA dropdown value changes
  maDropdown.addEventListener('change', function () {
    var selectedMA = parseFloat(maDropdown.value);
    maOutput.textContent = selectedMA.toFixed(2);
  });
});
