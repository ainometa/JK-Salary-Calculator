// Function to calculate Net Salary
function calculateNetSalary() {
  var grossSalary = parseFloat(document.getElementById('gross').textContent);
  var npsDeduction = parseFloat(document.getElementById('NPS').textContent);
  var deductionsInput = document.getElementById('deductions');
  var deductions = parseFloat(deductionsInput.value);

  // Check if deductions is a valid number
  if (isNaN(deductions)) {
    deductions = 0; // Set deductions to 0 if not a valid number
  }

  // Calculate Net Salary
  var netSalary = grossSalary - npsDeduction - deductions;
  document.getElementById('netOutput').textContent = netSalary.toFixed(2);
}

// Event listener for Deductions input
document.getElementById('deductions').addEventListener('input', function () {
  updateDeductionsOutput();
  calculateNetSalary(); // Update Net Salary whenever Deductions change
});

// Call the function initially and whenever Gross Salary, NPS Deduction, or Deductions change
document.addEventListener('DOMContentLoaded', function () {
  // Initialize Net Salary
  calculateNetSalary();

  // Add event listeners to Gross Salary, NPS Deduction, and Deductions
  document.getElementById('gross').addEventListener('DOMSubtreeModified', calculateNetSalary);
  document.getElementById('NPS').addEventListener('DOMSubtreeModified', calculateNetSalary);
});
