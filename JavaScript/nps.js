// Calculate NPS Deduction
function calculateNPSDeduction() {
  var basicPay = parseFloat(document.getElementById('basicPayOutput').textContent);
  var da = parseFloat(document.getElementById('daOutput').textContent);

  // Calculate NPS Deduction (10% of Basic Pay + DA)
  var npsDeduction = 0.1 * (basicPay + da);
  document.getElementById('NPS').textContent = npsDeduction.toFixed(2);
}

// Call the function initially and whenever Basic Pay or DA changes
document.addEventListener('DOMContentLoaded', function () {
  // Initialize NPS Deduction
  calculateNPSDeduction();

  // Add event listeners to Basic Pay and DA
  document.getElementById('basicPayDropdown').addEventListener('change', calculateNPSDeduction);
  document.getElementById('daDropdown').addEventListener('change', calculateNPSDeduction);
});
