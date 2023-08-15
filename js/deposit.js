//step-1
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2
  const depositField = document.getElementById("deposit-field");
  //for find deposit amount using .value
  const newDepositAmount = depositField.value;
  //   console.log(depositAmount);
  // step-3
  // for find inside value (non-input element ) so you need to use .inner-text
  const totalDepositElement = document.getElementById("total-deposit");
  //   totalDepositElement.innerText = newDepositAmount;
  const previousTotalDeposit = totalDepositElement.innerText;
  //   step 4
  const currentTotalDeposit =
    //parseFloat() using for string to number convert
    parseFloat(previousTotalDeposit) + parseFloat(newDepositAmount);
  totalDepositElement.innerText = currentTotalDeposit;
  //   step - 5 adding total balance
  const totalBalanceElement = document.getElementById("total-balance");
  // console.log(totalBalanceElement);
  const previousTotalBalanceString = totalBalanceElement.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);
  //step -6 calculate current balance
  const currentTotalBalance =
    previousTotalBalance + parseFloat(newDepositAmount);
  totalBalanceElement.innerText = currentTotalBalance;

  //   step - 7 clear the deposit field
  depositField.value = "";
});
