// JavaScript code
document.getElementById('submitBtn').addEventListener('click', function() {
  var input1Value = document.getElementById('input1').value;
  var input2Value = document.getElementById('input2').value;
  var logElement = document.getElementById('log');

  if (input1Value !== input2Value) {
    logElement.textContent = 'Your inputs don\'t match';
    logElement.style.visibility = 'visible';
  } else {
    logElement.style.visibility = 'hidden';
  }
});
