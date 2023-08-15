//step-1
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2
  const depositField = document.getElementById("deposit-field");
  //for find deposit amount using .value
  const depositAmount = depositField.value;
  //   console.log(depositAmount);
  // step-3
  // for find inside value (non-input element ) so you need to use .inner-text
  const totalDepositElement = document.getElementById("total-deposit");
  totalDepositElement.innerText = depositAmount;
  const totalDeposit = totalDepositElement.innerText;
});
