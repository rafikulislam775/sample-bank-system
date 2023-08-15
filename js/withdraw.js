document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("Withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString); //converting string to number

  const withdrawTotalElement = document.getElementById("total-withdraw");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString); //converting string to number

  const totalBalanceElement = document.getElementById("total-balance");
  const previousBalanceTotalString = totalBalanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString); //converting string to number

  withdrawField.value = ""; // Clear the withdrawal input field

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Your balance is not available for this withdrawal");
  } else {
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newTotalBalances = previousBalanceTotal - newWithdrawAmount;
    totalBalanceElement.innerText = newTotalBalances;
  }
});
