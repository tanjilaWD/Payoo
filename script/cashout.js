document.getElementById('cashout-btn').addEventListener('click', function(){
     //1- get the agent number & validate
     const cashoutNumber = getValueFromInput('cashout-number');
     if(cashoutNumber.length != 11){
      alert("Invalid Number");
      return;
     }
     //2- get the amount
     const cashoutAmount = getValueFromInput('cashout-amount');

   const currentBalance = getBalance();
   //4- calculate balance
   const newBalance = currentBalance - Number(cashoutAmount);
   console.log(newBalance);
   if(newBalance < 0){
      alert('Invalid Amount');
      return;
   }

   const pin = getValueFromInput('cashout-pin');
   if(pin === '1234'){
     alert("Cashout Successfull");
    setBalance(newBalance);
   } else{
      alert("Invalid Pin");
      return;
   }

});


// document.getElementById('cashout-btn').addEventListener('click', function(){

//    //1- get the agent number & validate
//    const cashoutNumberInput =  document.getElementById('cashout-number');
//    const cashoutNumber = cashoutNumberInput.value;
//    console.log(cashoutNumber);
//    if(cashoutNumber.length !=11){
//     alert("Invalid Agent Number");
//     return;
//    }

//    //2- get the amount
//    const cashoutAmountInput = document.getElementById('cashout-amount');
//    const cashoutAmount = cashoutAmountInput.value;
//    console.log(cashoutAmount);

//    //3- get the current balance
//    const balanceElement = document.getElementById('balance');
//    const balance= balanceElement.innerText;
//    console.log(balance);

//    //4- calculate new balance
//    const newBalance = Number(balance) - Number(cashoutAmount);
  
//    if(newBalance < 0){
//     alert('Invalid Amount');
//     return;
//    }
   
//    //5- get the pin and verify
//    const cashoutPinInput = document.getElementById('cashout-pin');
//    const Pin = cashoutPinInput.value;
//    console.log(Pin);
//    if(Pin === '1234'){
//        //5-1 true:: show an alert > set Balance
//        alert('Cashout Successfull');
//         console.log('New Balance:', newBalance);
//         balanceElement.innerText = newBalance;
//    }else{
//       //5-2 false:: show an error alert > return 
//       alert("Invalid Pin");
//       return;
//    }
  
   
// });