// Populate DA dropdown options and calculate DA output
    document.addEventListener('DOMContentLoaded', function () {
      var daDropdown = document.getElementById('daDropdown');
      var daOutput = document.getElementById('daOutput');

      // Populate DA dropdown options from 0% to 150%
      for (var i = 0; i <= 150; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i + '%';
        daDropdown.add(option);
      }

      // Update DA output when DA dropdown value changes
      daDropdown.addEventListener('change', function () {
        var selectedDA = parseFloat(daDropdown.value) / 100;
        var basicPay = parseFloat(document.getElementById('basicPayOutput').textContent);
        var calculatedDA = basicPay * selectedDA;
        daOutput.textContent = calculatedDA.toFixed(2);
      });
    });