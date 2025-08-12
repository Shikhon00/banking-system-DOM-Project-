document.getElementById('depositBtn').addEventListener('click', function () {
    
    const inputDepositAmount = document.getElementById('inputDeposit');
    const depositField = document.getElementById('deposit');
    const balanceField = document.getElementById('balance');
    const depositAmount = inputDepositAmount.value;
    const depositAmountValue= parseInt(depositAmount);
    
    const depositText= depositField.innerText;
    const depositNumber= parseInt(depositText);
    const depositTotal=depositNumber+depositAmountValue;

    const balanceText= balanceField.innerText;
    const balanceNumber= parseInt(balanceText);
    const balanceTotal=balanceNumber+depositAmountValue;
    
if(depositAmount==''){
    alert("Enter a deposit amount. It can not be empty");
}
else if(depositAmount==0){
     alert("Deposit amount should be greater than 0");
 }
else{

    depositField.innerText=depositTotal;
    balanceField.innerText=balanceTotal;
}
    
})



document.getElementById('withdrowBtn').addEventListener('click', function () {
    
    const inputwithdrowAmount = document.getElementById('inputWithdrow');
    const withdrowField = document.getElementById('withdraw');
    const balanceField = document.getElementById('balance');
    const withdrowAmount = inputwithdrowAmount.value;
    const withdrowAmountValue= parseInt(withdrowAmount);
    
    const withdrowText= withdrowField.innerText;
    const withdrowNumber= parseInt(withdrowText);
    const withdrowTotal=withdrowNumber+withdrowAmountValue;

    const balanceText= balanceField.innerText;
    const balanceNumber= parseInt(balanceText);
    const balanceTotal=balanceNumber-withdrowAmountValue;
    
if(withdrowAmount==''){
    alert("Enter a withdraw amount. It can not be empty");
}
else if(withdrowAmount==0){
     alert("Withdraw amount should be greater than 0");
 }
else{

    withdrowField.innerText=withdrowTotal;
    balanceField.innerText=balanceTotal;
}
    
})