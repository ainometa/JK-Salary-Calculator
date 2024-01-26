// Calculate Secretariat Allowance output based on selected Secretariat Allowance
document.addEventListener('DOMContentLoaded', function () {
  var secretariatDropdown = document.getElementById('SecretariatAllowanceDropdown');
  var secretariatOutput = document.getElementById('SecretariatAllowanceOutput');

  // Update Secretariat Allowance output when Secretariat Allowance dropdown value changes
  secretariatDropdown.addEventListener('change', function () {
    var selectedSecretariat = parseFloat(secretariatDropdown.value);
    secretariatOutput.textContent = selectedSecretariat.toFixed(2);
  });
});
