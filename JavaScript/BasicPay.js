// BasicPay.js: Update Basic Pay Output based on the selected Basic Pay

function updateBasicPayOutput() {
  const basicPayDropdown = document.getElementById("basicPayDropdown");
  const basicPayOutput = document.getElementById("basicPayOutput");

  // Get the selected Basic Pay
  const selectedBasicPay = basicPayDropdown.value;

  // Update the Basic Pay Output cell
  basicPayOutput.textContent = selectedBasicPay;
}

// Attach the function to the change event of Basic Pay dropdown
document.getElementById("basicPayDropdown").addEventListener("change", updateBasicPayOutput);

// Initial update on page load
updateBasicPayOutput();
