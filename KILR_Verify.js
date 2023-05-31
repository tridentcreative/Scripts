// JavaScript code
document.querySelector('[kilr_verify="submit"]').addEventListener('click', function() {
  var input1Value = document.querySelector('[kilr_verify="input1"]').value;
  var input2Value = document.querySelector('[kilr_verify="input2"]').value;
  var logElement = document.querySelector('[kilr_verify="log"]');

  if (input1Value !== input2Value) {
    logElement.textContent = 'Your Inputs Don\'t Match, Try Again.';
    logElement.style.visibility = 'visible';
  } else {
    logElement.style.visibility = 'hidden';
  }
});
