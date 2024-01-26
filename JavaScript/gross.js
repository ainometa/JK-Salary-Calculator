// Calculate Gross Salary based on various allowances
function calculateGrossSalary() {
  var basicPay = parseFloat(document.getElementById('basicPayOutput').textContent);
  var da = parseFloat(document.getElementById('daOutput').textContent);
  var hra = parseFloat(document.getElementById('hraOutput').textContent);
  var ta = parseFloat(document.getElementById('taOutput').textContent);
  var secretariatAllowance = parseFloat(document.getElementById('SecretariatAllowanceOutput').textContent);
  var cca = parseFloat(document.getElementById('ccaOutput').textContent);
  var ma = parseFloat(document.getElementById('maOutput').textContent);
  var otherAllowances = parseFloat(document.getElementById('otherAllowancesOutput').textContent);

  var grossSalary = basicPay + da + hra + ta + secretariatAllowance + cca + ma + otherAllowances;
  document.getElementById('gross').textContent = grossSalary.toFixed(2);
}

// Call the function initially and whenever any allowance changes
document.addEventListener('DOMContentLoaded', function () {
  // Initialize allowances and gross salary
  calculateGrossSalary();

  // Add event listeners to each allowance dropdown/input
  document.getElementById('basicPayDropdown').addEventListener('change', calculateGrossSalary);
  document.getElementById('daDropdown').addEventListener('change', calculateGrossSalary);
  document.getElementById('hraDropdown').addEventListener('change', calculateGrossSalary);
  document.getElementById('taDropdown').addEventListener('change', calculateGrossSalary);
  document.getElementById('SecretariatAllowanceDropdown').addEventListener('change', calculateGrossSalary);
  document.getElementById('ccaDropdown').addEventListener('change', calculateGrossSalary);
  document.getElementById('maDropdown').addEventListener('change', calculateGrossSalary);
  document.getElementById('otherAllowances').addEventListener('input', calculateGrossSalary);
});
